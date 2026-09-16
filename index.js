require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.command("/bot_name-ping", async ({ command, ack, respond}) =>{
    const start = Date.now();
    await ack();
    const latency = Date.now() - start;
    await respond({ text: `Pong!\nLatency: ${latency}ms`});
});

(async () => {
    await app.start();
    console.log("hello");
})();
const axios = require("axios");

app.command("/bot_name-catfact", async ({ack, respond}) => {
    await ack();
    try{
        const response = await axios.get("https://catfact.ninja/fact");
        await respond({ text: `Cat Fact:\n${response.data.fact}`});
    } catch(err){
        await respond({ text: "failed to fetch a cat fact."});
    }
})