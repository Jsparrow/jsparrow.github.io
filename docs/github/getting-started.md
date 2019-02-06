---
title: Getting started
sidebarDepth: 2
---

# Getting started

[[toc]]

## Beta

The jSparrow GitHub App is now available as a free beta version!

Check it out at [GitHub](https://github.com/apps/jsparrow-app)

## Introduction

The jSparrow GitHub App (JGA) is the integration of jSparrow's refactorings as part of a GitHub app.

It is a continuous integration tool, integrated in your build pipeline and used to apply automatic refactorings. The JGA supplies similar [rules](/rules/) as the [jSparrow Eclipse plugin](/eclipse/getting-started.html), but works without user input and is started automatically on every creation of a pull request.

__jSparrow automates by..__
* ..taking care of formatting and minimizing code smells
* ..transforming old language constructs to new language constructs
* ..using more efficient constructs thus improving performance

The idea to develop jSparrow for GitHub was to create a tool that improves the code quality automatically during the review process. Whenever a developer using jSparrow creates a pull request, jSparrow is started and a commit to the pull request with code improvement is created automatically. If the reviewer confirms the pull request, the modifications jSparrow is proposing are merged into the branch.  

## Why GitHub App

Apps on GitHub allow you to automate and improve your workflow. GitHub Apps are first-class actors within GitHub. A GitHub App acts on its own behalf, taking actions via the API directly using its own identity.  
The jSparrow GitHub App can be installed directly on organizations and user accounts and granted access to specific repositories. This means, when you set up your GitHub App, you can select the repositories you want it to have access to. For example, if you set up the JGA on the octocat repository, it will write only to the octocat repository. To install a GitHub App in an organization account, you must be an organization owner, or have an admin permissions in a repository.

## Installation

You can install apps from the GitHub Marketplace to use in your personal account or in your organization. To install the jSparrow GitHub App, please follow these simple steps:  

1. Open the provided link for the beta version in your browser.
2. Click on the Install button.
3. Choose the location for the installation. Decide and select whether you want to install the app on your personal account, or as an organization account.
4. The app requires access to repositories. You have to decide whether to grant the app access to all of your repositories, or just to certain repositories, then select `All repositories` or `Only selected repositories` accordingly.
5. Review the app's access permissions, then click Install.

### Requirements

* Maven project
* Maven 2.2.1 or later

## Usage

### How to use once it is installed

1. Create a pull request to GitHub  
2. Wait until jSparrow finishes and pushes back changes
3. Review the results

### Rule selection and configuration

To configure which rules should be applied, use the configuration file (`jsparrow.yml`). Place this file in your project's root directory.
The child projects will inherit the parent's configuration, unless another `jsparrow.yml` is placed in their base directory. If the configuration file is not present and no configuration is inherited from parents, the JMP will use the default configuration. If the configuration file has errors, an exception will be thrown and the JMP will terminate.

The `jsparrow.yml` file consists of three optional sections.
The first section contains the profiles definition.
To define a profile you should specify its name, the list of rules included in the profile and their configuration if any applies (e.g., configuration for [LoggerRule](/rules/standard-logger.html) and [RenamingRule](/rules/rename-fields.html)).
Any number of profiles can be defined. The profile to be used for refactoring should be designated with the `selectedProfile` key.

The second section contains a list of rules which will be used for refactoring if no profile is designated as `selectedProfile`.
Similarly as in profile definition, the list of rules can be followed by the rule configuration if any is required.

The third section under `excludes` node consists of the modules, packages and classes that shall not be refactored by JMP. If no `excludes` are defined, JMP will refactor the entire main resources of the project.
This section will only be recognized in the `yml` file in the root project, i.e., in any `yml` file placed in child projects the `excludes` section will be discarded.

The following is an example of a `jsparrow.yml` configuration file:

```yaml
# Specify one of the profiles declared below as the selected profile.  
# If the selectedProfile is not specified the rules in the “rules:” section
# will be applied  
selectedProfile: profile1  

# define profiles here  
profiles:  
 - name: profile1  
   rules:  
    - TryWithResource
    - MultiCatch
    - FieldRenaming
    - StandardLogger

# The configuration for LoggerRule and RenamingRule can be placed together
# with the profile in which the rules are included. If the configuration
# within the profile is missing, then the default values are used. The
# following is a configuration sample with default values  
  loggerRule:  
    systemOutReplaceOption: INFO  
    systemErrReplaceOption: ERROR  
    printStacktraceReplaceOption: ERROR  
    systemOutPrintExceptionReplaceOption: INFO  
    systemErrPrintExceptionReplaceOption: ERROR  
    addMissingLoggingStatement: ERROR  
    attachExceptionObject: true  
  renamingRule:  
    fieldTypes:  
      - private
      - protected
      - package-protected
      - public
    underscoreReplacementOption: Upper  
    dollarReplacementOption: Leave  

# The rules in this section will be executed, if no profile has been
# specified as selectedProfile or via maven. To deactivate rules, they can be
# commented with the #-sign. The configuration for RenamingRule and LoggerRule
# in this section can be done the same way as in the configuration
# in profiles, under the rules section.
rules:
  - TryWithResource
  - MultiCatch
  - FieldRenaming
  - StandardLogger  
loggerRule:  
  systemOutReplaceOption: INFO  
  systemErrReplaceOption: ERROR  
  printStacktraceReplaceOption: ERROR  
  systemOutPrintExceptionReplaceOption: INFO  
  systemErrPrintExceptionReplaceOption: ERROR  
  addMissingLoggingStatement: ERROR  
  attachExceptionObject: true  
renamingRule:  
  fieldTypes:  
    - private
    - protected
    - package-protected
    - public
  underscoreReplacementOption: Upper  
  dollarReplacementOption: Leave  

# Define modules, classes and packages that you don't want to apply refactoring
# to. Excluded modules can only be defined on the parent project and those modules
# are then entirely ignored. If the module project has it's own yml file, it
# overrides the entire configuration inherited from the yml configuration of
# the parent project, unless it is an excluded module.
excludes:    
    excludeModules:  
      - eu.jsparrow.core  
    excludePackages:  
      - eu.jsparrow.core  
      - eu.jsparrow.core.rule  
    excludeClasses:  
      - eu.jsparrow.core.Activator.java  
```

::: warning NOTE
Any configuration options in the YAML file are case sensitive and require precise indentation.
:::
