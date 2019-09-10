---
title: Getting started
sidebarDepth: 2
---

::: warning Please Note!
This part of the documentation is out of date. The GitHub App Beta has ended.  
Further information about the jSparrow Cloud App will be coming soon.  
[Statistics](/statistics/statistics/) are available at a new location.
:::

# Getting started

## Introduction

The jSparrow GitHub App (JGA) is the integration of jSparrow's refactorings as part of a GitHub app.

It is a continuous integration tool, integrated in your build pipeline and used to apply automatic refactorings. The JGA supplies similar [rules](/rules/) as the [jSparrow Eclipse plugin](/eclipse/getting-started.html), but works without user input and is started automatically on every creation of a pull request.

__jSparrow automates by..__
* ..taking care of formatting and minimizing code smells
* ..transforming old language constructs to new language constructs
* ..using more efficient constructs thus improving performance

The idea to develop jSparrow for GitHub was to create a tool that improves the code quality automatically during the review process. Whenever a developer using jSparrow creates a pull request, jSparrow is started and a commit to the pull request with code improvement is created automatically. If the reviewer confirms the pull request, the modifications jSparrow is proposing are merged into the branch.  

