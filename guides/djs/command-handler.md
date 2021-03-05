---
title: Command Handler
index: 5
category: Command Handler
auhtor: CashoutJohnny
updatedAt: 3/5/2021
---

# Command Handler 

## What is a Command handler?

A Command Handler is responsible for executing Commands or operations and presenting results to the user.

## Getting Started
In Your Main File, You will want to add what’s in the box below. 

### **Notice** 
If you’re not using a .env file to log in use `client.login(config.token)` or `client.login(token)`.

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${dir}/${file}`);
    client.commands.set(command.name, command);
}


client.login(process.env.TOKEN)
```

## How Does This Work

On line 20 you will see `fs.readdirSync()`. `fs.readdirSync()` is a method that will return an array of all files name in the directory. **Examples:** `[say.js, ping.js]`

Next on line 20 you will see `.filter(file => file.endsWith('.js'));`. In This Part it the filter makes sure any none JS Files are lefted out of the array.

### **More Information**
[discord.js Docs](https://discordjs.guide/command-handling/#dynamically-reading-command-files)
