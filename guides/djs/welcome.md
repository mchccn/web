---
title: Welcome
index: 0
category: Welcome
---

# Welcome

Hello there, this is Nova's official Discord.js guide, here to help you get started with Discord.js.
Now, before we go on, there is of course a prerequisite to Discord.js, and that is JavaScript.

**The reason why you should learn JavaScript first is because not knowing the language will slow you down greatly.**

If you haven't learned JavaScript promises and async/await, we highly recommend reviewing the aforementioned subjects. Some good resources to learn are:

-   [Eloquent JavaScript, a free online book](http://eloquentjavascript.net/)
-   [JavaScript.info, a modern javascript tutorial](https://javascript.info/)
-   [CodeCademy's interactive JavaScript course](https://www.codecademy.com/learn/learn-javascript)
-   [MDN's JavaScript guide and full documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Google, your best friend](https://google.com)

After you've covered promises, you are free to return and start!

## Environment

For our purposes, we'll be using Node v14.x and Discord.js v12. It is fine to use Node v15 or later, but please stick with Discord.js v12 with us for the best experience.

If you haven't got Node installed, please do so [here](https://nodejs.org/en/).

## Nodemon

[nodemon](https://www.npmjs.com/package/nodemon) is a package we're going to use to speed up the development process. It will restart the bot every time we make changes, so we won't have to stop and restart the bot ourselves.

### Installation

Using [npm](https://www.npmjs.com/):

```
npm i -g nodemon
```

Using [yarn](https://yarnpkg.com/):

```
yarn global add nodemon
```

### Usage

Now that you have nodemon installed globally, you can use it like this:

```
nodemon yourFileName.js
```

to start the file and restart when it is changed. Fancy, huh?
