---
title: Getting started
---
# Getting started

[[toc]]

## Introduction

jSparrow is a eclipse plugin, which automaticaly applies improvements, based on a set of predefined rules.

With the support of screenshots the functionality is explained, by inspecting the following project with jSparrow:

* JFreeChart - Future State Edition (FSE)
    * https://github.com/jfree/jfreechart-fse
    * GNU License
* Morphia
    * https://github.com/mongodb/morphia
    * Apache License Version 2.0
* StringTemplate 4
    * https://github.com/antlr/stringtemplate4
    * BSD License
* Own test cases

## Usage of the Plugin

The plugin is activated with a rightclick in the editor or the package tree. The selection of elements defines which files are used for the improvement process. The following types are supported:
* A project
    * Changes are applied to the whole project
* A package
    * Changes are limited to the selected package. It is possible to select multiple packages at once
* A Java class file
    * Same functionality as package but only on file level.
* Java editor
    * Changes are applied to the java class that is in focus of the editor



Screenshot for a selected project:



## Selection of rules

After the execution of “Select rules to apply” a selection window is opened to select the rule set.
Window is split in three parts. On the top is filtering part which makes it easier to find rules you would like to apply.
* add screenshot of filtering part

Middle of the window is divided in two lists. Left list contains available rules and right one contains rules that you want to apply.
You can add desired rules to right list by simply selecting one or more rules on left list and clicking Add button or add all the rules by clicking Add all button.
* add screenshot of rules selection

On the bottom part of the window, the description of currently selected rule will be displayed.
* add screenshot of description
    * think of adding just one screenshot for all

### Standard rules that are predefined

The screenshot displays the preselection of the default profile.

::: tip
Profiles can be configured in the preference page.
:::



### Selection of the profile

Through the drop down menu of the select rules interface it is possible to choose a profile. Change of currently selected rule will discard previously made selection.



## Preview of the rules to apply

After selecting rules the preview wizard is displayd, containing changes for each rule, one at a time.

Following elements are in the preview:
* Name of the rule
    * In the left upper corner is the name of current rule
* Short description of the rule
    * Below the name of the rule is a description
* Statistics for the rule
    * Displays how many times the rule was applied, what is estimeted time saved and how much time is saved by applying the rule
* List of changed java classes
    * Shows all the classes that are changed by the rule
* Diff view
    * Left side: old Javacode
    * Right side: new Javacode
* Buttons
    * “Next”: Forward to the next rule
    * “Back”: Return to previous rule
    * “Cancel”: Cancel all changes 
    * “Finish”: Apply all changes


### Rules in detail

Following are the example screenshots of all the rules.

#### Arithmetic Assignment

Improves operations on primitive data types, if only one arithmetic operation is done on a variable and overrides itself.


#### TryWithResource

All classes with try-statements that encapsulate Closable or AutoCloseable resources will be moved to the header of the try, resulting in a try-with-resource statement which was introduced in JSR-334.

#### MultiCatch

Since JSR-334 there is a possibility to have multi-catch statement, therefore exceptions with the same body can be merged.

#### StringUtils

Replace operations of Strings with a corresponding StringUtil operation.

#### Braces to Control-Block

Optional braces will be added to control statements to improve readability. 

#### Use FunctionalInterface

Anonymous inner classes will be replaced with equivalent lambda expressions, if they are functional interfaces. A functional Interface is a interface with only one method that needs to be implemented.

#### While to forEach

While-Loops with iterators will be replaced by ForEach Loops if possible

#### For to forEach

For-Loops with iterators will be replaced by ForEach Loops if possible

#### Collections should use clear() instead of removeAll()

Collection that are clearing themselves with removeAll(\<CollectionName>) should use instead clear().

#### SerialVersionUID should be final, static

Serializable classes with an serialVersionUID should be final and static. Missing modifieres are applied.

#### String.format should use %n as line separator 

Instead of \n or \r\n in String.format strings there should be %n used to implicit use the system line separator.

#### toString() should not be used on Strings

Removes the cases where thString() is used on a Object that is already a string. Remove those invocations.

#### Remove unnecessary new String() constructor

Calls of new String(StringLiteral) or new String() should be replaced with the used Stringliteral or an empty string. Strings are immutable therefore indistinguishable if the content is the same. 

#### Concat strings with “+” operator instead of concat()

Calls of String.concat() can be replaced with an “+” operation. This improves the readability and sometimes the performance if a constant calls concat on a constant.

#### Primitive Types should not be implicit wrapped to a string

Through the “+” operator a primitive type can be converted to a string if the empty string is appended. These constructs should be replaced with PrimitiveType.toString(\<value>)

#### Construction of primitive data types replaced with valueOf()

Construction of primitive data type object can be replaced with the static call on the primitive type with valueOf().

#### Code Formatter

The default code formatter is applied

#### Organise Imports

Organise imports is applied on the class.



## Options

jSparrow allows the generation of a default profile. The preferences are integrated in eclipse and through “Window”/”Preferences”/”jSparrow” to reach.

### Default profile

The default profile determines, which rules are pre-selected when starting the rule wizard.
Hint: The pre selection can still be changed during the rule selection process.

### Profiles related to specific Java target versions
### Filtering rules by a tag

You can filter rules by text or by available tags. Tags group rules by functionality, requirements or any relevant common factor they have.

### Disabled rules

Some rules may not be able for applying on a certain project. Reson for that is one of the following missing requirements:
* Java version too low
* Missing required library

