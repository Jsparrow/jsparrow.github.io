---
title: Getting started
---
# Getting started

[[toc]]

## Introduction

jSparrow is an Eclipse plugin that automates refactoring and therefore makes repetitive work unnecessary.
jSparrow can help in the following regards:

* minimizing code smells
* upgrading to new Java versions (transforming old language constructs in new language constructs)
* getting performance improvements by using more efficient constructs

With the support of screenshots the functionality of jSparrow will be explained.

## Usage of the Plugin

The plugin is activated with a right-click in the editor or the package tree. The selection of elements defines which files are used for the refactoring process. jSparrow may be applied to the following artifacts:

* Project
    * Changes are applied to the whole project.
* Packages
    * Changes are limited to the selected package. It is possible to select multiple packages at once.
* Java classes
    * Changes are limited to the selected classes. It is possible to select multiple classes at once.
* Java editor
    * Changes are applied to the Java class currently displayed in the editor.

[ ![Screenshot for a selected project](/img/eclipse/selected_project_large.jpg) ](/img/eclipse/selected_project_large.jpg)


## Selection of rules

After the execution of “Select Rules” a selection window is opened, where rules to be applied can be selected.

[ ![Select rules wizard](/img/eclipse/select_rules_wizard.png) ](/img/eclipse/select_rules_wizard.png)

The window is split into three parts:

* __Top:__ On top there is a filtering part which makes it easier to find rules you would like to apply.
* __Middle:__ The middle of the window is divided into two lists. The left list contains the unselected rules, whereas the right one contains rules that are about to be applied.
Desired rules may be added to the right list simply by selecting one or more rules on the left list and pushing the `Add` button. If you want to apply all the rules, you can do just that by simply pushing the `Add all` button.
* __Bottom:__ On the bottom part of the window, the description of the currently selected rule is displayed.


### Selection of the profile

Through the `Select profile` drop down menu of the select rules window it is possible to choose a profile. Changing the currently selected profile will discard previously selected rules however. By default, a predefined default profile is used with mix of most common rules.

::: tip
Profiles can be configured in the preference page.
:::


## Preview of the rules to apply

After confirming the selected rules by clicking `Finish`, the preview window is displayed. This window displays changes for each rule, for one rule at a time.

[ ![Preview of the rules to apply](/img/eclipse/preview_wizard.png) ](/img/eclipse/preview_wizard.png)

[ ![Preview of the rules to apply](/img/eclipse/preview_wizard.png) ](/img/eclipse/preview_wizard.png)

The following elements are displayed in the preview window:

* Name of the rule
    * In the upper left corner is the name of current rule
* Short description of the rule
    * Below the name of the rule is the short description of the rule
* Statistics for the rule
    * Displays how many times the rule has been applied (`Issues Fixed`) and an estimation of time saved (`Time Saved`) by applying the rule.
* List of changed Java classes
    * Shows all the classes that are affected by the rule
* Diff view
    * Left side: old Java code
    * Right side: new Java code
* Buttons
    * “Summary”: Skip to the summary page (contains statistics and an overview of all changed classes)
    * “Back”: Return to the previous rule
    * “Next”: Forward to the next rule
    * “Cancel”: Cancel all changes
    * “Finish”: Apply all changes. Only after clicking that, code is changed.

[ ![Statistics summary](/img/eclipse/preview_summary.png) ](/img/eclipse/preview_summary.png)

## Additional Options

Rules can be grouped into profiles in jSparrow. The preferences concerning profiles may be accessed in Eclipse via “Window” -> ”Preferences” -> ”jSparrow”.

### Default profile

The default profile determines, which profile will be selected by default in the select rules window.
::: tip
The default profile can still be changed during the rule selection process. 
For more information see [Setting the default profile](profiles.html#setting-the-default-profile).
:::

### Filtering rules by a tag

Rules can be filtered by text or by tags. Tags group rules by functionality, requirements or any relevant common factor they have.

### Disabled rules

Some rules may not be available to be applied on certain projects. The reason for that is one of the following missing requirements:
* Java version too low
* Missing required library
::: tip
Information about unsatisfied requirements will be shown in red color in the rule description in the select rules window.
:::


## License key
To update the jSparrow license, open the License Preference Page under "Window" -> "Preferences" -> "jSparrow" -> "License". 
On Mac OS X this can be found under "Eclipse" -> "Preferences" -> "jSparrow" -> "License". 

[ ![License Preference Page](/img/eclipse/license_preference_page.png) ](/img/eclipse/license_preference_page.png)

Click the "Update license key" button to open the following dialog:

[ ![Update license key](/img/eclipse/update_license_empty_dialog.png) ](/img/eclipse/update_license_empty_dialog.png)

Enter your license key and press "Update". The following should be displayed if the license key is valid:

[ ![Update license key](/img/eclipse/update_license_success_dialog.png) ](/img/eclipse/update_license_success_dialog.png)