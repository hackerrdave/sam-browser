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

```bash
./execute-machine-track-uptime.sh
```
