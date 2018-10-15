# Getting started

[[toc]]

## Introduction

The jSparrow GitHub App (JGA) is a continuous integration tool, integrated in your build pipeline, used to apply automatic refactoring. It supplies similar rules as the jSparrow Eclipse Plugin, but works without user input and is started automatically on every creation of the pull request.   
#### jSparrow automates things like:  
* taking care of formatting and minimizing code smells  
* transforming old language constructs to new language constructs  
* using more efficient constructs thus improving performance   

The idea to develop jSparrow for GitHub was to create a tool that improves the code quality automatically during the review process. Whenever a developer using jSparrow creates a pull request, jSparrow is started and a commit to the pull request with code improvement is created automatically. If the reviewer confirms the pull request, the modifications jSparrow is proposing are merged into the branch.  

## Why GitHub App

Apps on the GitHub allow you to automate and improve your workflow. GitHub Apps are first-class actors within GitHub. A GitHub App acts on its own behalf, taking actions via the API directly using its own identity.  
jSparrow GitHub App can be installed directly on organizations and user accounts and granted access to specific repositories. This means, when you set up your GitHub App, you can select the repositories you want it to have access to. For example, if you set up an jSparrow GitHub App on the octocat repository it will write only to the octocat repository. To install a GitHub App in organization account, you must be an organization owner or have an admin permissions in a repository.

## Installation 

You can install apps from GitHub Marketplace to use in your personal account or in your organization. To install the jSparrow GitHub App, please follow the simple steps below:  

1. Open in browser the provided link for the beta version. 
2. Click on the Install button. 
3. Choose location for the installation. Decide and select wether you want to install app on your personal account or as the organization. 
4. The app requires access to repositories, so you have to decide whether to give the app access to all of your repositories, or to certain repositories, then select All repositories or Only select repositories. 
5. If you chose to give the app access to limited repositories instead of all of your repositories, type the name of each repository you'd like to give the app access to, then click on the repository name to select it. 
6. Review the app's access permissions, then click Install. 

### Requirements

* Maven project
* Maven 2.2.1 or newer 
* Java 8 

::: tip
Maven projects themselves may have their Java source version set to an older version than 1.8 - this is not a problem. However, in this case, all rules requiring a newer source level will be ignored. 
:::

## Usage

### How to use when it is installed
1. Create pull request to GitHub  
2. Webhook is called that invokes jSparrow with URL to repository and change-set
3. jSparrow fetches code from GitHub using GitHub App authentication
4. jSparrow makes changes on code
5. jSparrow pushes changes back to GitHub

### Configuration

To configure which rules should be applied, use the configuration file (`jsparrow.yml`). Place this file in your project's root directory. If the configuration file is not present there, the default configuration will be used. If the configuration file has errors, an exception will be thrown and refactoring won't be executed.

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

::: tip
Any configuration options in the YAML file are case sensitive. Be careful how you type out things!
:::