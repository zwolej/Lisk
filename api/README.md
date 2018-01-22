# Docker

### production running

in api folder
```
./gradlew build docker 
```
then
```
docker images
```

get latest image tag io.lisk/api

put it into api/docker-compose.yml
```
api:
    image: io.lisk/api:<HERE_TAG>
```

run full backend:

```
api/docker-compose up -d
```

### db

phpmyadmin + mariadb + liqubase

# Database

## liqubase

```
https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client/2.2.1
http://download.liquibase.org/
```

download both jars and run below

### ddl
```
 java -jar liquibase.jar --driver=org.mariadb.jdbc.Driver --classpath=mariadb-java-client-2.2.1.jar --changeLogFile=db.changelog_model.xml --url="jdbc:mariadb://localhost:3306/lisk" --username=lisk --password=lisk6532 generateChangeLog
```
### dml
```
 java -jar liquibase.jar --driver=org.mariadb.jdbc.Driver --classpath=mariadb-java-client-2.2.1.jar --changeLogFile=db.changelog_data.xml --url="jdbc:mariadb://localhost:3306/lisk" --username=lisk --password=lisk6532 --diffTypes="data" generateChangeLog
```
