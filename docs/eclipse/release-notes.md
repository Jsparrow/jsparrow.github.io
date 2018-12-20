---
title: Release Notes
---
# Release Notes

Here you will find the latest information about releases of the jSparrow Eclipse plugin.

## 3.0.0

_21.12.2018_

### Introduction of jSparrow Starter
This update introduces jSparrow Starter, a free version of jSparrow that makes it possible to apply 15 rules free of charge.

Registering enables jSparrow Starter permanently and allows you to apply the free rules without limitation.

#### What does this mean exactly?
Previously, the free version of jSparrow showed possible changes, but did not have the finish button enabled. With jSparrow Starter, the finish button will be enabled, as long as free rules are selected.

#### How to register?
See the documentation at: [Registration for 15 free rules](installation-guide.html#jsparrow-starter-registration).

### Fixed Bugs

#### Use StringUtils Methods
* Avoid implicit import collisions of 'StringUtils' classes from different packages.

#### Replace For-Loop with Stream::findFirst
* Fixed an issue related to deriving the generic types of elements on a stream.

#### System Out To Logging
* Finding the legal locations for using non-static loggers.

#### Replace Expression Lambda with Method Reference
* Using fully qualified names if it is not possible to add import statements.
* Avoiding ambiguities with overloaded methods when replacing lambdas by method references.

#### Replace Concatenation with Infix-Operation
* Fixed an issue where the 'concat' method is not used for concatenating 'java.lang.String' instances.

## 2.7.0

_21.11.2018_

This release brings 6 new rules and a news dashboard.

### News dashboard

A news dashboard has been added to jSparrow.
Make sure to visit the dashboard regularly to get news on upcoming updates!

[ ![Open the dashboard](/img/eclipse/release_notes/2-7-0-open-dashboard.gif) ](/img/eclipse/release_notes/2-7-0-open-dashboard.gif)

### New rules

#### Remove unnecessary thrown exceptions on method signatures

The following exceptions on method signatures are removed:

* Exceptions that are subtypes of already thrown exceptions
* Exceptions that are thrown more than once
* Exceptions that are inheriting from RuntimeException

See official documentation for more information: [Remove Unnecessary Thrown Exceptions on Method Signatures](/rules/remove-unnecessary-thrown-exceptions-on-method-signatures.html)

#### Remove double negations

Removes pairs of negations from boolean expressions until only zero or one negation is left.

See official documentation for more information: [Remove Double Negations](/rules/remove-double-negation.html)

#### Remove explicit call to super()

If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. Hence, there is no need to explicitly call the default constructor of the super class.

See official documentation for more information: [Remove Explicit Call To super()](/rules/remove-explicit-call-to-super.html)

#### Remove unnecessary semicolons

Finds and removes the unnecessary semicolons from the code blocks.

See official documentation for more information: [Remove Unnecessary Semicolons](/rules/remove-unnecessary-semicolons.html)

#### Use StringBuilder::append

Replaces the infix operator `+` over `String` concatenations with at least three operands by `StringBuilder::append`. When possible, unwraps the parenthesized expressions.

See official documentation for more information: [Use StringBuilder::append](/rules/use-stringbuilder-append.html)

#### Use guard condition

Replaces, when possible, the last if-statement of a method body with a guard-if and unwraps its body.

See official documentation for more information: [Use Guard Condition](/rules/guard-condition.html)

## 2.6.0

_21.09.2018_

### Update site change

jSparrow has now different features for Neon/Oxygen and Photon.
The jSparrow feature for Neon/Oxygen remains the same as before 2.6.0.

* Update can be done as before

The jSparrow feature for Photon is new and therefore it cannot be upgraded by the update mechanism from Eclipse.

* You need to install the the new feature from the Photon Category in at the Eclipse update site.

### New rules

#### Use local variable type inference

Minimum Java Version: 10
Replaces local variable declarations with var, wherever it is legal.

#### Use Optional::ifPresent

Minimum Java Version: 8
Replaces if-clauses for Optionals with `isPresent()` by using the `ifPresent(Consumer<? extends T>)` method, which wraps the executing statements of the if clause into a Consumer.

### Fixed bugs

#### Reformat code rule replaces mutated vowels in constant strings

The reformat code rule was replacing mutated vowels with question marks within constant `Strings`. This behavior was corrected and the constant `Strings` remain unchanged.

#### Compilation units with syntax errors stayed flagged as error afflicted classes even if the errors had been removed

Java classes with compilation errors are excluded from any refactoring by jSparrow by design. There has been a bug however, where fixing such Java classes with errors would still leave them marked to be ignored by jSparrow until Eclipse was restarted.

This issue has been fixed and Java classes will be evaluated for errors on each execution of jSparrow.

## 2.5.3

_16.08.2018_

The version range of the `apache.commons.lang3` library that is used for the “Use StringUtils Methods” rule has been enlarged. Currently we support all versions that are released.

* Accepted versions of `apache.commons.lang3` are now : [3.0,3.7]

## 2.5.2

_31.07.2018_

Eclipse Photon is now Supported

* Organize imports has been updates to work with Eclipse Photon

## 2.5.0

_22.05.2018_

This release brings substantial performance improvements, one new rule and various small improvements.

### Important notice

License keys have to be added again!
The way license information is stored changed. For this reason, all previously added license keys need to be added again.
The license key can be added as follows: preferences → jSparrow → License → “Update license key”.
We thank you for your understanding!

### Performance improvements

Applying rules takes only half the time now!

Process improvements of the rule engine led to an overall reduced time for applying all refactorings in the “Select Rules” wizard. Measurements show that running jSparrow on projects only takes a fraction of the time it previously took.

![Absolute performance improvement](/img/eclipse/release_notes/absolute-performance-improvement-with-legend.png)
![Relative performance improvement](/img/eclipse/release_notes/relative-performance-improvement.png)

### Remove deprecated date constructs

Some `java.util.Date` constructors like `new Date(int year, int month, int day)`, `new Date(int year, int month, int date, int hrs, int min)` and `new Date(int year, int month, int date, int hrs, int min, int sec)` are deprecated and the Calendar should be used instead.  This rule searches for deprecated calendar instances, introduces calendar instances and sets the time corresponding to the parameters in the deprecated constructor, and replaces the latter with an invocation of `Calendar.getTime()`.  For instance, the following code:

``` java
// Deprecated Date Constructor
Date date = new Date(90, 1, 31);
```

will be replaced with:

``` java
// Calendar instead of deprecated constructor
Calendar calendar = Calendar.getInstance();
calendar.set(1990, 1, 31);
Date date = calendar.getTime();
```

Note that the date constructor is implicitly adding 1900 to the first argument (i.e. year), whereas `Calendar.set` is expecting the exact year value. Therefore, the rule takes care of preparing the parameters for the `Calendar.set()`-method properly.
If the deprecated constructor is used in a field initialization, then an initializing block is introduced for creating the calendar and initializing the field properly. See the before/after table.

### Removal of the obsolete _Field naming convention_ rule

Since the introduction of the _Rename Fields_ rule (Context Menu → jSparrow → Rename Fields Rule), the _Field Naming Convention_ rule became obsolete. The _Rename Fields_ rule offers more options and has better performance.

### Adjustment of the time saved

On the summary page the value of “Time Saved” now uses man-days, meaning eight-hour working days. Man-days are a more management-friendly unit than 24-hour working days and correspond better with current laws about working hours.

### MINOR UI IMPROVEMENTS

* Removal of the obsolete tag “logging”
* This tag is obsolete in the “Select Rules” wizard, since all logging related refactorings are bundled in the “Logging Rule” wizard.
* The “Add all” button is no longer enabled if only disabled rules are present
* Removal of the word “Apply” in the context menu
* Added a minimum width to the “Select Rules” wizard
* Bugfix to avoid UI freezes when committing survey results
* Bugfix that prevents a rare case where it was possible to select no profile

## 2.4.5

_25.04.2018_

### Bugfix for ImmutableStaticFinalCollections-Rule

Diamond Operators in Java 7 are not valid within a method parameter because their type cannot be inferred there. This caused a compilation error, when the rule was applied to a Java 7 project. The fix causes the rule to ignore collections in a Java 7 project, which use a Diamond Operator in their initializer.

### Bugfix for FieldRenaming-Rule

Solves an issue where the renaming of a field did not change the references to it in anonymous inner classes.

## 2.4.4

_26.03.2018_

Updated the way the free licenses work.

### Detailed information

Free licenses have been reworked to no longer require a connection to the licensing server. When using older versions of jSparrow this might have led to warning issues. However, jSparrow functionality should not be adversely impacted.
Any warnings should be able to be removed by upgrading to the latest version of jSparrow. If you experience errors that persist after the upgrade please contact us at [bugreport@jsparrow.eu](mailto:bugreport@jsparrow.eu).

## 2.4.3

_20.02.2018_

### Bug fixes

* Further improvements on the comment preservation
* Minor improvements on the rule execution counting
* Duplicate profiles where possible if “x” was used to cancel the operation
* Using the “x” to abort the operation now behaves as expected
* jSparrow was executable on sub-elements of a class but was not executed because the types are not suitable for refactoring
* The visual display of jSparrow was removed from sub-elements of a class

## 2.4.2

_30.01.2018_

### Bug fixes

* Fixed a bug where comments were lost in some cases.

## 2.4.1

_09.01.2018_

### Bug fixes

* Fixed a bug where the number of times a rule was applied was displayed incorrectly.
* Fixed an issue that prevented some rules from counting the number of times they were applied correctly.
* Fixed a bug where changes made by the “Use Try-With-Resource” rule were not displayed under certain circumstances.
* Fixed a bug where no license warning was displayed if a license was already in use by another user.

## 2.4.0

_19.12.2017_

### Rename fields rule

This release adds a new semi-automatic rule called “Rename Fields Rule”.

This new rule can be used for finding and renaming the fields that do not comply with the Naming Conventions.

A configuration wizards provides different refactoring options. The user can select fields to be renamed based on the access modifier key (screenshot of the configuration wizard is given below). As soon as a field which doesn’t comply with the naming conventions is found, the rule will search for its references and compute a renaming. The search scope can be set by the user, either to the current project or to the workspace that eclipse is currently using.

![RenameFieldsRule](/img/eclipse/release_notes/rename-fields-rule.png)

The new name is computed based on the existing field’ name and the configuration options that the user can provide on the rule wizard. On the default configuration, the existing field name is converted to camelCase. Furthermore the occurrences of underscores `_` and dollar-signs `$` are removed and the first letter which is following them (if any) is converted to uppercase. Note however, that the user has the possibility to choose in the configuration wizard whether or not to change the first letter after `_` or `$` to uppercase.

Before the renaming is applied to the original sources, a preview wizard will show the changes related to the renaming of each field. Since a non-private field may be accessed in multiple classes,  a single renaming may affect more than one file. A tree-style view in the preview wizard will show the the changes to all of the affected files for each renaming. The user has the possibility to ignore a renaming by un-checking the corresponding element in the tree view.

![RenameFieldsRulePreviewBlur](/img/eclipse/release_notes/rename-fields-rule-preview-blur.png)

__Limitations__

The renaming cannot be performed automatically if:

* The newly computed name is not a valid java variable name.
* The newly computed name clashes with an existing variable name within the same class.

### Bug fixes

* Logging Rule:
  * Fixed a bug where tooltips for checkboxes would not show up at the right position.

## 2.3.1

_29.11.2017_

### Bug fixes

* Fixed a bug where controls on the Summary Page could be duplicated under certain circumstances.
* Fixed a bug where alphabetical sorting of files in the Summary page was disabled.

## 2.3.0

_21.11.2017_

### Statistics
jSparrow now estimates the time it takes to fix issues. All rules in jSparrow get an individual estimation time to fix the corresponding issue. On each run of jSparrow, the time for each rule is multiplied by the number of occurrences of each corresponding rule, resulting in an estimation of saved time.

The statistics are added as follows:

* (Updated) Preview Wizard: now additionally displays the following information for each rule individually:
  * (New) Issues Fixed: The number of issues fixed for the current rule in all selected classes
  * (New) Time Saved: The amount of time saved for the current rule in all selected classes
* (Updated) Summary Page: now displays the following information for all rules:
  * (New) Run Duration: The time it took jSparrow to get and calculate all changes (i.e., the time between clicking “Finish” in the “Select Rules” Wizard and the appearance of the Preview Wizard).
  * (New) Issues Fixed: The overall number of fixed issues (i.e., how often rules were applied) for the current run of jSparrow.
  * (New) Time Saved: The total time saved by applying all rules displayed.
  * (New) Rules: A list of rules that were applied in the current run of jSparrow, including the number of times they were applied and the amount of time saved per rule.
  * Files and Diff View: The complete list of files where jSparrow found potential changes and a diff view that displays changes for each file.

  ![Summary page](/img/eclipse/release_notes/summary-page-blur.png)

### Logging rule

The Logging Rule has been updated in major ways to support more cases and provide greater customizability. The changes are focused on Exception logging.

* (New) Logging Exceptions: A new grouping of Exception related logging options.
  * (Updated) “Replace printStackTrace by a logger statement with selected level”
    * Option to replace all occurrences of `printStackTrace` with the selected severity level
  * (New) “Insert a logger statement with the selected level for unlogged exceptions”
    * Option to add a logger statement to catch-clauses that do not log an Exception in any way
  * (New) “Always add the exceptions as a parameter in logger statements”
    * Option to always log an Exception if there is one present. For example, if only the message of an Exception is logged but not the Exception itself, the Exception will be added as additional argument to the log statement.
  * (New) “Always use this severity level for logging exceptions”
    * Option to always use the selected severity of “Logging Exceptions” when an Exception is logged, even though `System.out.print` or `System.err.print` might specify a different severity level.
  * (New) Tooltips: Added examples for the checkboxes to illustrate the functionality

  ![Summary page](/img/eclipse/release_notes/logging-rule.png)

### Profile settings

The profiles settings have been improved and jSparrow is now capable of importing and exporting rule profiles. Exported profiles are saved in YAML format.

* (New) Import Profile(s)…
  * Adds the functionality to import YAML formatted jSparrow profiles
* (New) Export Profile(s)…
  *Adds the functionality to export the selected profile(s) into a YAML formatted file

  ![Summary page](/img/eclipse/release_notes/logging-rule.png)

### New Rule: UsePutIfAbsent

This Java 8 rule updates the following old language construct and improves readability:

* If `map.put(..)` is wrapped with a condition verifying the existence of an element one can use `map.putIfAbsent(…)` instead.

### Usability improvements

* Various usability improvements
  * Option to switch between flat and recursive package resolving
  * Re-selecting the same profile has the intended behavior of resetting the selected profiles
  * Rule descriptions are now shown even on the right side of the Select Rules Wizard

### Bug fixes

* Use Functional Interfaces:
  * Fixed a NullPointerException that could occur under very specific circumstances
  * Fixed an issue where a very specific case of an anonymous class containing wildcards in the body should not have been converted
* Replace Nested Loops with flatMap:
  * Fixed an issue where more than two nested streams could not be converted to a `flatMap`
* Use Multi-Catch:
  * Fixed an issue where catch clauses were shifted below more generic Exceptions
* Replace Expression Lambda with Method Reference:
  * Fixed an issue where method references were incorrectly used for inner types
  * Fixed an issue where jSparrow would not distinguish between `Integer.toString()` and `Integer.toString(Integer)`
* Remove Explicit Type Argument:
  * Fixed an issue where a Type Argument could not safely be inferred
* Replace static final Collections with `Collections.unmodifiable…()`:
  * Fixed an issue where unused imports where added
* Use StringUtils Methods:
  * Fixed an issue where not all changes were added on the first run if a parameter of a method invocation was a method invocation that could also be transformed
* Rule tags:
  * Fixed an issue where tags and “Remove disabled rules” would not work together

## 2.2.2

_25.10.2017_

### Bug fixes

* Fixed a bug where Eclipse would report “Save Problems” when manually editing and saving files right after running jSparrow.

## 2.2.1

_10.10.2017_

### Bug fixes

* An Issue was resolved if the project used Java 9 as language level.
  * Replace For-Loop with Enhanced-For-Loop
    * In cases the iterable was named after an primitive type with “s” as postfix the derived loop variable was translated to the corresponding primitive type. The behavior was changed so that an “a/an” is added as prefix to the created variable.

## 2.2.0

_21.09.2018_

This release is shipped with twelve new rules and other improvements to the user interface and the logic behind. In order to improve our possibility to track down bugs and other errors the OSGi bundle names have been changed. This has been necessary for jSparrow to work correctly with Eclipse Error Reporting. We have also added a new Summary Screen, where all changes can be reviewed before applying them. To make the selection of rules more intuitive and clearer we have changed their names to be more descriptive and consistent. The trial licensing model has been changed to accommodate new needs. Therefore it’s not possible anymore to persist changes with a trial license. However, changes can still be reviewed on the Summary Screen.

### Names of the OSGi bundles have been changed

* The prefix of the OSGI-bundles and OSGi-features of jSparrow has been changed from: `jSparrow` → `eu.jSparrow`
* __Important__: The result is that it is not possible to update from a previous version of jSparrow! It is required to uninstall and reinstall jSparrow to upgrade to 2.2.0. Otherwise there might be side effects because there will be two different named instances of jSparrow within your Eclipse version.

### Trial Licencing Model Changed

* The trial licence has changed.
* The major change is that it’s no longer possible to apply changes to source code.
* All changes will be displayed by the Preview Wizard and a Summary is shown in the final step at the new Summary Page.

### Summary Page

* Introduction of a Summary Page that displays all the changes from all rules that will be made.

### New Rules have been added

* Remove Inherited Interfaces from Class Declaration
  * Remove interfaces from class declaration, which are already implemented by a super class. These interfaces are inherited from the super class.
* Replace Equality Check with `isEmpty()`
  * Java 6 introduced `isEmpty()` on `Collections` and `Strings`. This rule replaces equality checks involving `length()` or `size()` with calls to `isEmpty()`. For example, `s.length() == 0` becomes `s.isEmpty()`. Applying this rule improves readability.
* Replace `equals()` on Enum constants
  * Replace occurrences of `equals()` on Enum constants with an identity comparison (==). In the case the equals relation is wrapped with an boolean negation the result will be an not equals (!=).
* Replace For-Loop with `Stream::anyMatch`
  * Replaces an occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with `Stream::anyMatch`. The stream syntax is more concise and improves readability.
* Replace For-Loop with `Stream::collect(Collectors.joining())`
  * Transforms loops which are only used for concatenating a `String` to an invocation of `Stream::collect(Collectors.joining())`. If the Java compliance level is below 1.8 and at least 1.5, then a `StringBuilder` is introduced for concatenating the values on each iteration of the loop.
* Replace For-Loop with `Stream::findFirst`
  * Enhanced for-loops which are used to find an element within a collection can be replaced by `Stream::findFirst`. Using the stream syntax a multi-line control statement can be reduced to a single line.
* Replace For-Loop with `Stream::sum`
  * Transforms enhanced for-loops which are only used for summing up the elements of a collection to a `Stream::sum` invocation
* Replace `indexOf()` with `contains()`
  * This rule replaces calls to `indexOf()` on instances of `String` or Collection with calls to the `contains()` method. For example `l.indexOf(s) >= 0` is transformed to `l.contains(s)`. `contains()` was introduced in Java 1.4 and helps to make the code more readable.
* Replace Nested Loops with flatMap
  * Nested For-Loops or invocations of forEach commonly used to iterate over all elements of a collection of collections, can be avoided by using `flatMap()`. Using `flatMap()` makes code much more readable and can be combined with other stream functions.
* Replace static final Collections With Collections.unmodifiable…()
  * An unmodifiable Collection can be created with the matching `Collections.unmodifiable…()` method. Some examples are `Collections.unmodifiableList()`, `Collections.unmodifiableSortedSet()`, etc. A declaration of a `Collection` with the `static` and `final` modifiers is not sufficient because it might still be modifiable. The `Collections` which are created with `Collections.unmodifiable…()` throw an `UnsupportedOperationException` as soon as a modification is attempted.
* StringBuffer() to StringBuilder()
  * This rule changes the type of local variables from `StringBuffer()` to `StringBuilder()`.
* Use equals() on Primitive Objects
  * It is recommended that you use `equals()` on primitive objects. Applying this rule will replace occurrences of `!=` and `==` with `equals()`. For example, `”hello” == “world”` will become `”hello”.equals(“world”)` Using this rule helps to avoid bugs, as `==` checks for object reference equality instead of value equality.

### Name Changes of Rules

| Previous Name                        | Current Name |
|:------------------------------- |:----- |
|Arithmetic Assignment|Replace Assignment with Compound Operator|
|Braces to Control-Block|Add Parenthesis to Control Statements|
|Collection removeAll() to clear()|Replace removeAll() with clear()|
|Use Diamond Operator|Remove Explicit Type Argument|
|Enhanced For-Loop to Stream::forEach|Replace For-Loop with Stream::forEach|
|Field names convention|Apply Field Naming Conventions|
|For to ForEach|Replace For-Loop with Enhanced-For-Loop|
|Use FunctionalInterface|Use Functional Interfaces|
|Replace constructors of primitive types with valueOf() method|Replace Inefficient Constructors with valueOf()|
|Stream forEach to collect|Use Stream::collect|
|if-Wrapper in Stream::forEach to Stream::filter|Use Stream::filter|
|Lambda forEach to map|Use Stream::map|
|Expression Lambda to Method Reference|Replace Expression Lambda with Method Reference|
|MultiCatch|Use Multi-Catch|
|Separate lines for variable declarations|Split Multiple Variable Declarations|
|OrganiseImportsRule|Organize Imports|
|@Override annotation rule|Use @Override Annotation|
|SonarQube: Primitives should not be boxed just for String conversions|Remove Boxing for String Conversions|
|Rearrange class members|Rearrange Class Members|
|Remove new String() constructor|Remove String Constructor|
|Remove toString() from Strings|Remove toString() on String|
|SerialVersionUid check for static, final|Make SerialVersionUID Static Final|
|Standard Logger|System Out To Logging|
|Statement Lambda To Expression Lambda|Remove Lambda Expression Parenthesis|
|Replace String.concat(param) with Infix-Operation Plus|Replace Concatenation with Infix-Operation|
|String.format() System line separator|Use Portable Newline|
|String Literals equality check|Reorder String Equality Check|
|StringUtils|Use StringUtils Methods|
|TryWithResource|Use Try-With-Resource|
|While-loops to for-loop|Replace While-Loop With Enhanced For-Loop|

## 2.1.0

_14.08.2017_

* New welcome screen that explains in very short terms how to use jSparrow, including a feedback area
* A new license expired dialog with a feedback form
* Improved dialogs for error messages
* Improvement of the forEach to Lambda rule
* Minor bugfix of the Lambda do method reference rule

## 2.0.2

_06.07.2017_

* Support for Eclipse Oxygen
* Support for macOS

## 2.0.0

_21.06.2017_

* UI improvements
  * Redesign of the selection process within the corresponding wizard
  * Redesign of the preference page
    * profiles have been improved
* General
  * Introduction of rule requirements
    * Introduces a background check that is performed on the selected sources, respectively the project they are located in, to check different requirements
    * Java version requirement check added
    * Required libraries check added
  * Introduction of interactive rules
    * SystemOutToLogging rule was introduced which requires addition user interaction to be executed
* Ruleset Additions
  * Target Java 1.0 and upwards
    * Rearrange class members
      * Class elements are sorted according to the oracle code convention for file organization
      * Order of visibility modifieres are also included
    * Yoda Conditions for Strings
      * Constants are moved to the left side of the condition to prevent an accidental assignment
    * Naming conventions for private elements
      * Change names of variables according to Java code conventions of Oracle
    * Multiple variables should not be declared in the same line
      * Splitting the variable declaration to multiple lines to prevent implicit changes on multiple variables, by changing the modifier of one line.
    * Interactive Rule: System out to logging
      * Introduces the replacement of System.out statements (`println`, `error`, `e.printstacktrace`) with a logging statement
        * Requires the configuration of a logging environment (log4j, slf4j)
  * Target Java 1.6 and upwards
    * @Override addition
      * To improve readability and enforcing compile errors on methods where the signature has changed the `@Override` annotation should be applied
  * Target Java 1.7 and upwards
    * Diamondrule
      * Removes unnecessary generic type references to replace them with diamonds
  * Target Java 1.8 and upwards
    * Lambda statements to method references
      * Replaces Java 8 lambda function definitions with a method reference lambda if possible
    * Statement lambda to expression
      * If the body of the lambda statement contains only a single expression, the braces are optional. It is reduced to a lambda expression.
    * For Each to Lambda
      * Transforms a for each loop to a corresponding lambda statement
    * Addition Optimization possibilities for lambda loops
      * if-statements without else to filters from streams
      * unwrapping object done with mapping from streams
      * collecting objects done with collect from streams

## 1.1.0

_31.03.2017_

* Support for Eclipse Mars
* UI improvements
  * Addition of progress monitors for better feedback
  * Loading indicators on various points where real time background processing is not possible

## 1.0.0

_01.02.2017_

* Support for Eclipse Neon
* Support for Ubuntu and Windows 7/10
* Execution on different views in the Eclipse IDE
  * Editor
  * Package Explorer
* Introduction of a diff-view after application of the selected rules
* Contains Preference Page to customize the behavior.
* Initial Ruleset
  * Target Java 1.0 and upwards
    * OrganiseImports
      * Removes unused imports and organizes them
    * StringUtils
      * Apache Commons Lang `StringUtils` required in classpath of executing project
      * Replaces operations on `String` object with corresponding `StringUtils` operation
  * Target Java 1.1. and upwards
    * SerialVersionUid
      * Adds the modifieres `static` and `final` to `SerialVersionUid` long variables when they are absent
    * RemoveNewStringConstructor
      * Removes all class instantiations from `String` if its parameter is empty or a `String`.
    * RemoveToStringOnString
      * Removes all method invocation of `toString()` on a `String` object
    * StringConcatToPlus
      * Replaces the `String` concatenation with the method invocation with the plus operation for `Strings`
    * PrimitiveBoxedForString
      * A boxed primitive is allocated just to call `toString()`. It is more effective to just use the `static` form of `toString` which takes the primitive value.
    * InefficientConstructor
      * All calls to a constructor of a primitive type will be replaced by the corresponding static `valueOf()` method.
    * ArithmeticAssignment
      * Assignments that only execute simple arithmetic operations on the target are resolved as arithmetic assignment
    * BracketsToControl
      * All control flow statements that aren’t using curly braces are wrapped to improve readability
  * Target Java 1.2 and upwards
    * CollectionRemoveAll
      * Collections that use remove all elements by applying it to itself could also be cleared.
      * use `collection.clear()` instead of `collection.removeAll(collection)`
  * Target Java 1.5 and upwards
    * WhileToForEach
      * Replaces while loops with for-each loops that have been introduced in Java 1.5
    * ForToForEach
      * Replaces traditional for loops with for-each loops that have been introduced in Java 1.5
    * StringFormatLineSeparator
      * Use `String.format` placeholder for linebreak instead of distribution system dependent linebreak.
  * Target Java 1.7 and upwards
    * MultiCatch
      * Combines multiple catch phrases that handle the error identically
