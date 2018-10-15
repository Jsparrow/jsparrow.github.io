# About this repository

This is the documentation site for jSparrow!

[jsaprrow documentation](http://jsparrow.github.io)

# How to contribute

Fork this repository, make changes and when you are done with them send us a pull request. Thank you.

# Vuepress reference guide

[Vuepress documentation](https://vuepress.vuejs.org/guide/)

# Edit guide

We recommend to use npm for this project, feel free to use yum if you feel more comfortable.

## Installing npm

Install npm as described on nodejs.org:

https://nodejs.org/en/download/package-manager/

### Trouble shooting

```
events.js:1xx
      throw er; // Unhandled 'error' event
      ^
```

This error might be solved as follows:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Source: https://github.com/facebook/jest/issues/3254#issuecomment-297869853

## Installing project dependencies

All required dependencies can be installed by executing the following:

```
npm install
```

## Run development server

To start a local development server, simply execute the following:

```
npm run dev
```

# Update jsparrow.github.io

To execute this step, it is required to have write access to the [main repository](https://github.com/Jsparrow/jsparrow.github.io)

## Build site

Creating a static html/js site at docs/.vuepress/dist:

```
./deploy.sh
```
