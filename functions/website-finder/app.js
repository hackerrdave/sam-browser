const chromium = require('chrome-aws-lambda'); 
const puppeteer = chromium.puppeteer;

exports.lambdaHandler = async (event, context) => {
    const url = event["url"];
    const querySelector = event["querySelector"];
    const inverse = event["inverse"]

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    
    let foundItem = false;
    
    try {
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        const result = await page.$(`${querySelector}`)

        if (inverse) {
            foundItem = !result;
        } else {
            foundItem = !!result;
        }
    } catch(e) {
        console.log(e)
    } finally {
        await browser.close();

        if (foundItem) {
            console.log(`Found Item: ${querySelector}`);
        }
        
        return {
            "success": foundItem
        }
    }
};