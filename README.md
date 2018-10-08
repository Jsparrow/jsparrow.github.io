# About this repository

This is the documentation site for jSparrow!

[jsaprrow documentation](http://jsparrow.github.io)

# How to contribute

Fork this repository, make changes and when you are done with them send us a pullrequest. Thank you.

# Vuepress reference guide

[Vuepress documentation](https://vuepress.vuejs.org/guide/)

# Edit guide

We recommand tu use npm for this project, feel free to use yum if you feel more comfortable.

## Install npm

Install npm from nodejs.org.

https://nodejs.org/en/download/package-manager/

### Trouble shooting

events.js throws an unhandled error might be solved with 
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
https://github.com/facebook/jest/issues/3254#issuecomment-297869853

## Install dependencies

```
npm install
```

## Run development server

start development server

```
npm run dev
```

# Update jsparrow.github.io

To execute this step it is required to have write access to the [main repository](https://github.com/Jsparrow/jsparrow.github.io)

## build site

Creating a static html/js site at docs/.vuepress/dist
 
```
npm run build

./deploy
```

