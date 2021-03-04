---
title: Getting Started
index: 0
category: getting-started
---

# Getting Started with Discord.js

## Setting up a Discord Application

To get started on making a Discord bot, you must first create an application on the Discord developers page.
To get started with that, follow these steps:

-   Go to the [Discord Developer Portal](https://discord.com/developers/applications).
-   Click on the **"New Application**" button on the top-left corner.

You should now see a popup that looks like this:

![New app modal](/img/new-app-modal.png)

Enter a name for your bot, and click create.
On the left sidebar, you will see a tab named "Bot".
Click on that tab and click the "Add Bot" button, this is the actual bot that you will use.

### Your Bot's Token

In the bot page that has now appeared, You will see your bot's avatar and username, which you can change here.
Under the username however, you see 2 buttons that say "Copy" and "Regenerate".
The first button is to copy the token, which you will learn more about later.
The other button is to regenerate it, in case it ever gets leaked.

#### What is a token?

A token is basically your bot's password. It uses the token to authenticate with Discord's server to prove that it is indeed the same bot it claime to be.
It is of utmost importance that **you never share this token with ANYONE**. With a token, anyone can use the bot like it is theirs, which can be used for malicious intent such as:

-   spamming every channel it is in
-   spamming people's DMs
-   delete all the messages/channels in the server
-   kick/ban as many people as possible
-   leave all the servers it is in
-   damage your servers/backend
-   and much much more

#### My token got leaked! What do I do?

If your token got leaked, Regenerate it as soon as possible. Use the "Regenrate" button to get a new token, but keep in mind that your old token is now invalidated and must be swapped out.

#### Keeping Tokens Safe

We recommend that you store your tokens in **Environment Variables**, also known as the `.env` file.
To use them, simply create a file named `.env` in the root of your application, and run `require("dotenv").config()` as soon as possible in your application.
That line reads the `.env` file in the root of your project and loads all the keys and values (stored as `KEY=value`) into the object `process.env`.
Not that that object is available in all files after the config line is run.

For example:

```js
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

/* ... */

client.login(process.env.TOKEN);
```

**Note:** This assumes that your `.env` file looks like:

```
TOKEN=<your token>
```

If you are using a code-sharing service such as GitHub, GitLab, BitBucket, etc, remember to gitignore the `.env` file and the `node_modules` folder. Using GitHub's Node.js gitignore preset will already do this for you.

## Inviting Your Bot

To invite your bot to a server, go to the OAuth2 tab on the left and check the `bot` scope. At the bottom menu that appears, choose the relevant permissions (we will discuss them later), and copy-paste the generated link into your browser. You will then see the familiar bot invite page.

---

In the next article, we will look at actually getting into code and adding functuionality to your bot.
