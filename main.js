const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", (message) => {
  console.log("MESSAGE", message.content);
  if (message.content === "ping") {
    message.reply("pong");
  }
});
client.login("");
