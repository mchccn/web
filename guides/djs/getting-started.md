---
title: Getting Started
index: 0
category: Getting Started
author: EmanSza
updatedAt: 3/3/2021
---

```js
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (message.content === "ping") {
        message.reply("pong");
        console.log("Ping Ponged with a user!");
    }
});

client.login("TOKEN_HERE");
```
