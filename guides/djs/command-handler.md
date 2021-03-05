---
title: Command Handler
index: 5
category: Command Handler
auhtor: dheerajpv
updatedAt: 3/5/2021
---

# Making a Better Command Handler

In the last article, we made a super simple command handler that really doesnt do much.
It has no bells and whistles and only runs with the exact command name.
In this article, we will make a much better handler that can have multiple command names (aliases) and can even generate a default help menu.

## Getting Started

In your `index.js` file, you should have this code. This code will be explained below.

```js
const { Client, Collection } = require("discord.js");
const fs = require('fs/promises');
const path = require("path");

const client = new Client();
client.commands = new Collection();

async function traverseDir(dir) {
    const files = await fs.readDir(dir);

    for (const file of files) {
        if ((await fs.stat(file)).isDirectory()) {
          await traverse(path.join(dir, file));
          continue;
        }

        let cmd = await require(file);

        if (cmd.default && Object.keys(cmd).length === 1))
            cmd = cmd.default;

        client.commands.set(cmd.name, cmd);
        console.log(`Loaded command ${command.name}`);
    }
}

(async () => await traverseDir("./commands"))();

client.login(process.env.TOKEN);
```

The top 5 lines are simply boilerplate code, as we need to import all the libraries and create a client.
However, things get interesting after that.
We add a `commands` property to the client we instatiated as a new emtpty `Collection`.
We then create a function named `traverseDir` that goes through each JavaScript file in the specfied folder (and all subfolders) and loads them into `client.commands`.
Then, we run the function (because it is async, we have to wrap it in a self-running function).
Learn more about `async/await` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

Then we log in as usual.

## Responding to commands

What we did above only _loads_ the commands and does not respond to them, as can be evidenced by it not having a message listener.
To make the bot actually responf to them, we need to listen to the `message` event and check for commands. This can be done as follows.

```js
client.on("message" (message) => {
    // change with any prefix you want
    const prefix = "!";
    if (!message.content.startsWith(prefix)) return;

    const [commandName, ...args] = message.content
        .slice(prefix.length)
        .split(/\s+/g);

    let command;

    for (const c of client.commands.array()) {
        if (
            c.name === commandName
            || c.aliases.includes(commandName)
        ) {
            command = c;
            break;
        }
    }

    // additional command logic can go here
    // we will discuss this later

    try {
        command.callback(message, args, client);
    } catch (e) {
        message.channel.send(
            `An error occured trying to run command ${command.name}`
        );
    }
});
```

What the code above does is the following:

1. Listens for a message
2. Checks if it starts with a prefix, if not it gets ignored
3. Gets the command name and arguments from the message content
4. Finds the command from the `client.commands` collection
5. Tries to run the command's callback function
6. Should it throw an error, it sends a message indicating that to the user

## Making a Command

After making this _fancy_ command handler, we should know how to use it, right?
Well, you're in luck because that's what this section is about!
First, you need to create a folder named `commands` at the same level as your `index.js` file (if you've been following along, it should be `src/commands`).
In there make yourself a new JS file.
We will be making a simple command that replies with "pong" along with the arguments it recieved when you say "!ping" or "!p".

In `ping.js`, add the following code:

```js
module.exports = {
    name: "ping",
    aliases: ["p"],
    description: "replies pong",
    callback(message, args) {
        message.channel.send(`pong ${args.join(" ")}`);
    },
};
```

The `module.exports` part tells JavaScript (or more accurately CommonJS) to make the part inside the curly brackets (a JS object) available to other files, so we can load it from `index.js`.
We gave it properties named `name` and `aliases`, the command will run whenever one of those are the command name.
We also provided a callback function that runs whenever the command is run.
We took the message and args parameters (notice that we did not take the client param as we did not need it) and sent a message with them.

If you run `node src/index.js` in your terminal, you would see that it logs `Loaded command ping` and if you typed "!ping" or "!p" it replies with a message.
If you added more words after it it would also send them.

In the next article, we will look at how to expand on this handler to add more logic to commands, such as required permissions.
