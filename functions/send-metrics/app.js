exports.lambdaHandler = (event, context) => {
    // Event Object matches output of previous state of track-uptime statemachine
    const url = event["url"];
    const querySelector = event["querySelector"];
    const success = event["success"]
    const message = "Sending Metrics"
    
    // Send Metrics (Will only log for purposes of this exercise)
    console.log({ url, querySelector, success, message })
        
    return {
        "success": success,
        "querySelector": querySelector,
        "url": url
    }
};