#!/usr/bin/env bash

# Setup StepFunctions Local
docker-compose up --detach stepfunctionslocal

echo "waiting for StepFunctions Local to report 'Starting server on port' from container stepfunctionslocal"

while [ $(docker-compose logs --tail="all" stepfunctionslocal 2>&1 | grep "Starting server on port" | wc -l) -lt 1 ]; do
  echo "waiting for StepFunctions Local.."
  sleep 3
done

echo "StepFunctions Local is Ready!"

# Initialize StateMachine
echo "creating state machine"

states_json=$(cat ./statemachines/track-uptime.asl.json)

aws stepfunctions --endpoint http://localhost:8083 create-state-machine \
    --name "TrackUptime" \
    --role-arn "arn:aws:iam::012345678901:role/DummyRole" \
    --definition "$states_json" \
    --no-cli-pager

echo "state machine created"

# Execute StateMachine
aws stepfunctions --endpoint http://localhost:8083 start-execution \
    --state-machine-arn "arn:aws:states:us-east-1:123456789012:stateMachine:TrackUptime" \
    --input '{"url": "https://hackerrdave.com", "querySelector": "#___gatsby", "inverse": false}' \
    --no-cli-pager
