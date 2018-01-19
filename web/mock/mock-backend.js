#! /usr/bin/env node
/**
 *  Script to run wiremock based on specific stub jar downloaded from local machine or if not found from nexus.
 *
 *  Download sources:
 *    1) local machine .m2 repository
 *    2) nexus artifactory
 *
 *  Required params:
 *    stubs - path to direct stubs jar link
 *      uk/co/hl/bf/working-day-calendar/0.2.9-SNAPSHOT/working-day-calendar-0.2.9-20180112.122824-2-stubs.jar
 *    port - port of wiremock to serve mocks
 *      9000
 *
 *  Example of use in project package.json:
 *    node ./mock/mock-backend.js stubs=uk/co/hl/bf/working-day-calendar/0.2.9-SNAPSHOT/working-day-calendar-0.2.9-20180112.122824-2-stubs.jar port=9000"
 */

const NPMRC_CA_PARAM_NAME = "ca";
const MAVEN_REPO = "https://nexus.hltech.dev/repository/maven-public/";

const fs = require('fs');
const request = require('request');
const unzip = require('unzip');
const execSync = require('child_process').execSync;

const dir = './stubs';
const jarDir = dir + '/stubs.jar';
const mappingsDir = dir + '/mappings';

cleanStubs(dir);
createBaseStubFolder();
downloadStubsJarAndRunWireMock(getParam('stubs'));

function downloadStubsJarAndRunWireMock(stubsPath) {
  createJarFromLocalM2Source(
    stubsPath,
    createJarFromNexusSource
  )
}

function createJarFromLocalM2Source(stubsPath, alternative) {
  const pathToPackage = getUserHome() + '/.m2/repository/' + stubsPath;
  console.log("Looking for jar in local", pathToPackage);
  fs.readFile(pathToPackage, (err, data) => {
    if (err) {
      alternative(stubsPath);
      return
    }
    fs.writeFile(jarDir, data, (err) => {
    if (err) {
      alternative(stubsPath);
      return
    }

    runWireMockOnJustCreatedJar();
});
})
}

function createJarFromNexusSource(stubsPath) {
  const projectCa = getNpmrcParam(NPMRC_CA_PARAM_NAME);
  const ca = projectCa !== undefined ? {ca: projectCa} : {};
  const pathToPackage = MAVEN_REPO + stubsPath;

  console.log("Looking for jar in nexus", pathToPackage);
  request({
    method: "GET",
    uri: pathToPackage,
    agentOptions: ca
  }, function(body, err) {
    if (err) {
      console.log('Jar downloading status: ' + err.statusCode + ' - ' + err.statusMessage);
    } else {
      console.log(body);
    }

    runWireMockOnJustCreatedJar();
  }).pipe(fs.createWriteStream(jarDir));
}

function runWireMockOnJustCreatedJar() {
  console.log("Running wiremock jar..");
  extractStubsJar();
  runWireMock(getParam('port'));
}

function createBaseStubFolder() {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  if (!fs.existsSync(mappingsDir)){
    fs.mkdirSync(mappingsDir);
  }
}

function extractStubsJar() {
  fs.createReadStream(jarDir)
    .pipe(unzip.Parse())
    .on('entry', function (entry) {
      const fileName = entry.path;
      if (fileName.endsWith(".json")) {
        const filenameWithoutFolders = fileName.replace(/^.*[\\\/]/, '');
        console.log("found", filenameWithoutFolders);
        entry.pipe(fs.createWriteStream(mappingsDir + '/' + filenameWithoutFolders));
      } else {
        entry.autodrain();
      }
    });
}

function cleanStubs(path) {
  const deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file,index){
        const curPath = path + "/" + file;
        if(fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

  deleteFolderRecursive(path);
}

function runWireMock(port) {
  const spawn = require('child_process').spawn;
  spawn('java', ['-jar', './mock/wiremock-standalone-2.14.0.jar', '--root-dir=' + dir, '--port=' + port], { stdio: 'inherit' });
}

function getUserHome() {
  return process.env.HOME || process.env.USERPROFILE;
}

function getParam(key) {
  for (i = 0; i < process.argv.length; i++) {
    const val = process.argv[i];
    const name = val.split('=')[0];
    if (name === key) {
      return val.split('=')[1];
    }
  }

  console.log("Missing param: " + key);
  process.exit(-1);
}

function getNpmrcParam(param) {
  const paramValue = execSync('npm config get ' + param);
  return paramValue.toString();
}
