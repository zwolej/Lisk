FROM java:8
VOLUME /tmp
ARG JAR_FILE
ADD ${JAR_FILE} backend.jar
ENTRYPOINT ["java","-jar","/backend.jar"]
