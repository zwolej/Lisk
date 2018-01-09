#! /usr/bin/env node
var spawn = require('child_process').spawn;
spawn('java', ['-jar', './bin/stub-runner-boot-1.1.3.RELEASE.jar', '--stubrunner.workOffline=true',
  '--stubrunner.ids=com.example:beer-api-producer-advanced:+:8888'], { stdio: 'inherit' });
