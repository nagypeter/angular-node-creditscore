# ORACLE Container Native DevOps workshop #

### About this hands-on workshop ###

This lab is designed for people with no prior experience with Docker, Node.js, AngularJS and want to learn the core concepts and basics of Container Native DevOps. 

The demo application is a simple Credit Scoring application. It has a Node.js backend microservice which calculates the credit score based on name, date of birth and SSN. The application UI which invokes the backend miscroservice using REST interface is built on AngularJS.

Services being used during the hands-on are the following:

+ **Oracle Container Pipelines (OCP - former Wercker)** is a Docker-Native CI/CD  Automation platform for Kubernetes & Microservice Deployments. OCP is integrated with Docker containers, which package up application code and can be easily moved from server to server. Each build artifact can be a Docker container. The user can take the container from the Docker Hub or his private registry and build the code before shipping it. Its SaaS platform enables developers to test and deploy code often. They can push software updates incrementally as they are ready, rather than in bundled dumps. It makes it easier for coders to practice continuous integration, a software engineering practice in which each change a developer makes to the codebase is constantly tested in the process so that software doesn’t break when it goes live.
+ **Docker Hub** is a v2 container registry available publicly.

+ **Docker Engine** Docker runtime environment to run the container packaged application.

**Architecture**

![](images/wercker.lifecycle.png)

### Prerequisites ###

- [Oracle Container Pipeline](https://app.wercker.com) account.
- [Github account](sign.up.github.md)
- [Docker Hub account](sign.up.docker.md)

### The topics to be covered in this hands-on session are: ###

1. [Create Oracle Container Pipeline to build, test and package sample application](sample.app.desktop.pipeline.md)
2. [Application Lifecycle Management (Web - Github)](change.application.web.desktop.md)
3. [Application Lifecycle Management (Desktop - Oracle Container Pipelines CLI)](change.application.desktop.dockerhub.md)

### License ###
Copyright (c) 2014, 2016 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0
