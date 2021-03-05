---
title: Simple Functionality
index: 1
category: Getting Started
author: dheerajpv
updatedAt: 3/4/2021
---

## Adding functionality to your new bot

### Creating your workspace

Now that you have a bot set up on Discord, it is finally time to add functionality to it! Get started by opening a code editor, we recommend [Visual Studio Code](https://code.visualstudio.com/) if you don't already have one installed.
Create a folder that will house all of your bot code, and open it in your editor. Open a terminal (Bash, CMD, Powershell) in that folder and run the following commands:

```
npm init -y
npm install discord.js
```

Or if you use [yarn](https://yarnpkg.com):

```
yarn init -y
yarn add discord.js
```

Optionally, you can also initialize and sync up your code with git, remember to ignore the `node_modules` folder and the `.env` file if you have one (use GitHub's Node.js `.gitignore` template).

Your directory will now contain new files: `package.json`, `package-lock.json`, and a `node_modules` folder.
Open the package.json file and add/change the `main` property to be `src/index.js`. Accordingly, create a directory called `src` in the root of your project and an `index.js` file inside it.

Also create a `.env` file in the root of your project and add `TOKEN=<your token>` there, as explained in [the Getting Started guide](/guides/djs/getting-started.md#Keeping Tokens Safe).

### Getting started to code

Your `index.js` file serves as the entry point to your bot, so that is where you should set up your bot.
Add the following code to the file (its contents will be explained below):

```js
require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client();

client.login(process.env.TOKEN);

module.exports = client;
```

This code imports `dotenv` which loads the contents of the `.env` file into the `process.env` object, which we use later. We also import the [Client](https://discord.js.org/#/docs/main/stable/class/Client), which is the main way to interact with Discord's API.
We instantiate it, which gives us the functionality for everything the bot can do. We then log in to discord using the token, and export the client object so it can be used in other files.

The above code can get your discord bot online, but it does absolutely nothing.
You can send messages, try to run commands, but nothing will happen.
Why? We are not listening for any events.
The Client class has lots of events that form the base of any discord.js application.
For now we want to listen for messages.

Above the login line, add the following code:

```js
client.on("message", (message) => {
    message.channel.send("hi");
});
```

This code sets up an event listener for the `message` event, which is emitted whenever there is a new message that gets recieved by the bot.
The second argument we provided is an arrow function, which runs whenever that event is emitted.
We recieve the message object, and we can do whatever we want with it. Here we are sending "hi" in the same channel of the message, **EVERY TIME A MESSAGE IS RECIEVED**.

### Super Simple Command Handler

As cool as responding on every message is, you probably want to make commands that the bot does different things in each one.
To do this, replace the code inside the arrow function and add this (again, will be explained below):

```js
const prefix = "!";

if (!message.content.startsWith(prefix)) return;

const { content } = message;

const [command, ...args] = content.split(/\s+/g);

switch (command) {
    case "ping": {
        message.channel.send("pong");
        break;
    }
}
```

This code creates a very simple command handler that responds only to valid commands.
The command prefix can easily be changed by changing the value of `prefix`.
The `if` statement takes care of validating the prefix being present, if it is not, nothing happens.
The `content` variable is the whole message but without the prefix at the start.
We split it by spaces, and as the command name should be the first argument, we use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to make `command` and `args` variables.
We then use a `switch` statement that checks the value of `command` and if it matches any of the cases we provided, it runs that code.

Next up, we will look at making a better command handler, that should be much better than this, and can also be used for dynamically generating a help menu.
