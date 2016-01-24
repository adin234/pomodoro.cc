#!/bin/bash

set -e

TAG="$1"
if [ -z "$TAG" ];then
  TAG=$(git rev-parse HEAD | cut -f6 -d-)
fi

echo "--> TAG $TAG"


id_for_container(){
  CONTAINER="$1"
  CONTAINER_ID="$(docker images | grep -m 1 "$CONTAINER" | awk '{print $3}')"
  echo $CONTAINER_ID
}

tag_container(){
  CONTAINER_NAME="$1"
  CONTAINER_ID="$(id_for_container "$CONTAINER_NAME")"
  echo $CONTAINER_NAME
  echo $CONTAINER_ID
  if [ -n "$CONTAINER_ID" ]; then
    echo "----> TAGGING $TAG $CONTAINER_NAME (id: $CONTAINER_ID)"
    docker tag -f $CONTAINER_ID $CONTAINER_NAME
  else
    echo "-- no such container"
  fi
}




tag_container 'pomodoro-api'
tag_container 'pomodoro-auth'
tag_container 'pomodoro-app'
tag_container 'pomodoro-main'
