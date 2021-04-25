# sam-browser

Serverless Project using Chrome+Puppeteer in a Lambda Layer, with an example StepFunctions State Machine to simulate an Uptime Tracker.

## Local Development

### Build

```bash
sam build --cached --parallel
```

### Execute Lambda Function

```bash
sam local invoke WebsiteFinderFunction --event events/website-finder-event.json
```

### Execute StateMachine

Start Lambdas:

```bash
sam local start-lambda
```

In separate process, create and execute statemachine using Step Functions Local:

```bash
./execute-machine-track-uptime.sh
```
