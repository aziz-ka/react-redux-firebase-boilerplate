#BEGIN COMMON
FROM ubuntu:14.04

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update

#Utilities
RUN apt-get install -y vim wget curl git unzip sudo

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

#Install dependencies
ADD package.json /app/package.json
RUN cd /app && \
    npm install

#Build
ADD . /app
RUN cd /app && \
    npm run build
