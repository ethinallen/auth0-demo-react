#!/usr/bin/env bash
docker build \
        -t auth0-demo-react:latest \
        .

docker run \
        -it \
        --rm \
        --publish 80:80 \
        --name auth0-demo-react auth0-demo-react
