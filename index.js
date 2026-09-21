require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
app.command("/bot_name-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
app.command("/bot_name-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/about", async ({ ack, respond}) => {
  await ack();
  await respond({
     text: "🤖 *About This Bot*\nHello User!do you want to know about Jazil Jafar VV.People pronouce as jazil.I am a Web Designer and Website builder.He lives in Kerala,India.Say in dm he loves :D"
  });
});
app.command("/hello", async ({ ack, respond}) => {
  await ack();
  await respond({
    text:" *Hello*\nHello Bro how are you doing.I am Jazil Jafars bot"
  })

})

(async () => {
  await app.start();
  console.log("Bot is running!");
})();