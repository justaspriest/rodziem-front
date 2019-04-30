#! /bin/bash

app_id=justaspriest/rodziem-front

docker build -t $app_id .
docker_image_id=$(docker run -p 49160:8080 -d $app_id)

docker images
sleep 1
docker logs $docker_image_id
