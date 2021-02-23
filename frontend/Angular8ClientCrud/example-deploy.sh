#!/bin/bash

sh ./start-docker.sh
docker login
docker push leonid97/cisco_backend:latest
scp -r /Users/leonidtkacenko/Test_Cisco/backend/docker-compose.override.yaml leonidtkacenko@IP_INSTANCE:/tmp/
ssh leonidtkacenko@IP_INSTANCE "cd .. && cd .. && cd tmp && sudo docker login && sudo docker-compose -f docker-compose.override.yaml up -d"