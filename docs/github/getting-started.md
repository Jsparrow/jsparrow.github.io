# Getting started

[[toc]]

## Introduction

The jSparrow GitHub App (JGA) is a continuous integration tool to apply automatic refactoring which is integrated in your build pipeline. It supplies similar rules as the jSparrow Eclipse Plugin, but works without user input and is started automatically on every creation of the pull request. 

## Why GitHub App

Apps on GitHub allow you to automate and improve your workflow. GitHub Apps are first-class actors within GitHub. A GitHub App acts on its own behalf, taking actions via the API directly using its own identity. 
GitHub Apps can be installed directly on organizations and user accounts and granted access to specific repositories. They come with built-in webhooks and narrow, specific permissions. When you set up your GitHub App, you can select the repositories you want it to access. For example, if you set up an jSparrow GitHub App on the octocat repository it will write only to the octocat repository. To install a GitHub App in organization account, you must be an organization owner or have admin permissions in a repository.

## Installation 

You can install apps from GitHub Marketplace to use in your personal account or in your organization.

1. At the top of any GitHub page, click Marketplace. 
2. Browse to the app you'd like to install, then click on the app's name. 
3. On the app's page, under "Pricing and setup," click on the pricing plan you'd like to use. 
4. Click Install it for free, Buy with GitHub, or Try free for 14 days. 
5. Under "Billing information"
Private: confirm that you're installing the app for your personal account. 
Organization: use the Switch billing account drop-down menu, and choose the organization in which you'd like to install the app. 
6. If you chose a paid plan and there isn't a payment method on file for your personal account/organization, click Add a Payment Method, then complete the form to add a credit card or PayPal account. After you successfully add a payment method, you will automatically return to the order page. 
7. Click Complete order and begin installation. 
8. If the app requires access to repositories, decide whether to give the app access to all of your repositories, or to certain repositories, then select All repositories or Only select repositories. 
9. If you chose to give the app access to limited repositories instead of all of your repositories, type the name of each repository you'd like to give the app access to, then click on the repository name to select it. 
10. Review the app's access permissions, then click Install. 

### Requirements

* Maven 2.2.1 or newer 
* Java 8 

::: tip
Maven projects themselves may have their Java source version set to an older version than 1.8 - this is not a problem. However, in this case, all rules requiring a newer source level will be ignored. 
:::

## Configuration

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