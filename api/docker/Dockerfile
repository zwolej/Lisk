FROM java:8
VOLUME /tmp
ARG JAR_FILE
ADD ${JAR_FILE} hltimesheet-backend.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker","-jar","/hltimesheet-backend.jar"]
