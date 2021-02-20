#!/bin/bash
ng build
cd ../../backend/
docker build -t leonid97/cisco_backend .
docker-compose up -d