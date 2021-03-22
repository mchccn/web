---
title: Expanding the Command Handler
index: 6
category: Command Handler
author: dheerajpv
updatedAt: 3/5/2021
---

# Expanding the Command Handler

In the last guide, we made a proper command handler, albeit a primitive one.
If you haven't done that yet, you should check out that article and then come back.

The command handler we made, although it can handle commands, it doens't have any extra features.
A good command handler should have permissions validation, server only commands, and more.
Even though it is possible for it to be done in the command callback, it is much more efficient for a developer to not have to repeat that code all the time.

## Server Only Commands

We will start off with a simple one, server only commands.
Each message has a `guild` property.
It is `undefined` in a DM, and has the server the message was sent in, if there was one.
Having a server only command is as simple as checking if `message.guild` is undefined, and if it is, block execution of the command.

This can be done with the following code, which you should add before the `try/catch` block in the message event handler:

```js
if (command.guildOnly && !message.guild) {
    message.channel.send("This command can only be run in a server.");
    return;
}
```

The `return` keyword is used to signify to JavaScript that no more of the function (the message event handler) should be run.

The `command.guildOnly` property is a boolean that should be true if the command is server only.

## Required Permissions

Discord has a complex permissions system that governs what members can do what things in a server.
For tasks such as kicking and banning people, checking if the person running the command can actually perform the action may be a good idea.
This is also easy to implement, as it is just another condition to check.

**Note:** Keep in mind that the message must be sent in a server to have permissions. Messages in DMs will not run the command.

To perform this check, add the following code:

-   In the top level of the file add this function:

```js
// just add the Permissions import to the already present Client import
const { Client, Permissions } = require("discord.js");

function validatePermissions(perms) {
    // getting the valid perms from discord
    const validPerms = Object.keys(Permissions.FLAGS);
    perms.forEach((p) => {
        if (!validPerms.includes(p))
            throw new Error(`Invalid Permission: ${p}`);
    });
}
```

-   Under the server only command code, add this:

```js
validatePermissions(command.permissions);

const hasAllPerms = true;
for (const p of command.permissions) {
    if (!message.member) {
        message.channel.send("This command must be run in a server.");
        return;
    }
    if (!message.member.hasPermission(p)) {
        hasAllPerms = false;
        break;
    }
}

if (!hasAllPerms) {
    message.channel.send(
        `This command requires ${command.permissions.map(
            (p) => `\`${p.toLowerCase()}\``
        )}`
    );
    return;
}
```

The first part of the code is a function that checks an array of strings to see if they are valid Discord permissions.
If not, it will throw an error (this is VERY useful for debugging permissions).

The second part of the code checks if the message is in a server, and if the member has all the permissions provided in the array.
If they don't it sends them a message saying they are missing permissions and does not run the command.

Note that this requires the `permissions` property in each command that requires permissions to be an array of discord [permission strings](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS).

## Custom Checks

It is very simple to add even more checks like this to your command handler.
Simply add a new property in the command objects you export (that need them) and add an if statement (and potentially helper logic) like we did above.
This makes the command handler EXTREMELY extendable and useful for many situations.

Later, we will look at adding more checks.
You can also use other command handlers that people have already built for more functionality and features.
For example [cursorsdottsx](https://github.com/cursorsdottsx/) and [I](https://github.com/dheerajpv/) have made an extremely flexible command handler where almost every part of the codebase can be altered for your specific needs: [AeroClient](https://npmjs.com/package/@aeroware/aeroclient/). We have a guide on using it here as well.
