# sam-browser
Example Serverless Project using Chrome+Puppeteer in a Lambda Layer.

## Build & Run Locally

```bash
sam build
sam local invoke WebsiteFinder --event events/website-finder-event.json
```