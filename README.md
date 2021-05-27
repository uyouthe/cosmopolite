# 🤝 Сosmopolite
Make a ES Module for NPM and a dist file for &lt;script&gt; at the same time.

<p align="center">
    <img alt="License" src="https://img.shields.io/github/license/mvoloskov/cosmopolite?color=brightgreen">
    <a href="https://www.buymeacoffee.com/mvoloskov"><img alt="Sponsor this project" src="https://img.shields.io/badge/-sponsor-ffdd00?logo=buy-me-a-coffee&logoColor=black"></a>
    <a href="https://github.com/mvoloskov"><img alt="My github" src="https://img.shields.io/github/followers/mvoloskov?style=social"></a>
    <a href="https://twitter.com/intent/user?screen_name=mvoloskov"><img alt="My twitter" src="https://img.shields.io/twitter/follow/mvoloskov?style=social"></a>
</p>
<p align="center">
    <a href="#usage">Usage</a>
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://miloslav.website">Author</a>
</p>

## Why?

When making open source libraries, you don't want to limit your users. I believe that any simple library should be installable in at least two ways:
1. `npm install amazingLib`
2. `<script src="https://amazingCDN.com/amazingLib.js"></script>`

But obviously you don't want to develop two separate codebases.

This is where Cosmopolite steps in.

## What it does?

It takes your NPM library you wrote with ES imports and makes the distributive script file out of it. Your users now can not only `npm install` your library, they also can include that generated file with a `<script>` tag and everything will work.

## Usage

1. Make your own repo using this repo as a template
2. Go to `package.json` and change the `name` field. **Use the valid JS identifier**. Let's say you changed it to `awesomeLib`.
3. `npm run dev`
4. Implement your library inside `src` folder.
5. Push changes. The `dist` folder will appear, there will be the `awesomeLib.js` file which'll be update continiously as you write your code. This is your dist.
6. Publish your library via NPM or Yarn to your favorite registry

Now your library will be accessible via both
```
npm install awesomeLib
```
and
```HTML
<script src="https://cdn.jsdelivr.net/gh/YOUR-GITHUB-LOGIN/awesomeLib/dist/awesomeLib.min.js"></script>
```

## Devserver

```
npm run dev
```

This will start a devserver, usually at [localhost:5000](localhost:5000). Please note that you need to go to `index.html` and change

```HTML
<script src="dist/cosmopolite.js"></script>
```

to

```HTML
<script src="dist/YOUR_LIBRARY_NAME.js"></script>
```

## Limitations

Your library name should be a valid JS identifier because it will be available as a callable function.
```JS
amazing-lib() // error
```

If you want to override it, your library name and your exposed function name should be different. You should modify the `rollup.config.js`.

The result would be that even if your `name` in `package.json` is uncallable `keyboard-cat`, your function will be named `keyboardCat` and that's a valid, callable name.

Enjoy!
