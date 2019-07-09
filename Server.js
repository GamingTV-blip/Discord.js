const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("bot online...");
});

bot.login("token hier einfügen");
