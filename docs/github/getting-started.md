# Getting started

[[toc]]

## Introduction

The jSparrow GitHub App (JGA) is the integration of jSparrow's refactorings as part of a GitHub app.

It is a continuous integration tool, integrated in your build pipeline and used to apply automatic refactorings. The JGA supplies similar [rules](/eclipse/rules_details.html) as the [jSparrow Eclipse Plugin](/eclipse/getting-started.html), but works without user input and is started automatically on every creation of a pull request.

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

### Configuration

To configure which rules should be applied, use a configuration file named `jsparrow.yml`. Place this file in your project's root directory. If the configuration file is not present there, the default configuration will be used. If the configuration file has errors, an exception will be thrown and refactorings will not be executed.

```yaml
# specify one of the profiles declared below as the selected profile.  
# if the selectedProfile is not specified the rules in the “rules:” section will be applied  
selectedProfile: profile1  

# define profiles here  
profiles:  
 - name: profile1  
 rules:  
   - TryWithResource
   - MultiCatch
   - FieldRenaming
   - StandardLogger

# configuration for LoggerRule and RenamingRule can be placed together with profile in which rules are included.   
# if there is no additional configuration for those rules when they are included in the list of rules for the profile, default values are used.   
# following is the configuration sample with default values set  
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

# rules in this section will be executed, if no profile has been specified as selectedProfile or via maven.  
# to deactivate rules, they could be commented with the #-sign  
# configuration for RenamingRule and LoggerRule in this section can be made same way as in the configuration in profiles, under the rules section.   
# this configuration is used if no profile is selected and rules are listed in rules section  
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

# define modules, classes and packages that you don't want to apply refactoring to  
# excluded modules could only be defined on parent project and those modules are then entirely ignored  
# if module project has it's own yaml file, it overrides entire configuration from parent project yaml configuration if module wasn't excluded in parent yaml  
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
Any configuration options in the YAML file are case sensitive and require precise identation.
:::
