---
title: Release Notes
---
# Release Notes

Here you will find the latest information about releases of the jSparrow Maven plugin.

## 3.16.0 <Badge vertical="middle" text="17.03.2022"/>

One new rule is shipped with release 3.16.0 of the jSparrow Maven Plugin:

* [Remove Unused Local Variables](/rules/rules/remove-unused-local-variables.html)

## 3.14.0 <Badge vertical="middle" text="20.01.2022"/>

One new rule is shipped with release 3.14.0 of the jSparrow Maven Plugin:

* [Use Dedicated AssertJ Assertions](/rules/rules/use-dedicated-assert-j-assertions.html)

## 3.13.0 <Badge vertical="middle" text="16.12.2021"/>

Two new rules are shipped with release 3.13.0 of the jSparrow Maven Plugin:

* [Chain AssertJ AssertThat Statements](/rules/rules/chain-assert-j-assert-that-statements.html)
* [Shift AssertJ Description Before Assertion](/rules/rules/shift-assert-j-description-before-assertion.html)

## 3.12.0 <Badge vertical="middle" text="18.11.2021"/>

One new rule is shipped with release 3.12.0 of the jSparrow Maven Plugin:

* [Use Java Records](/rules/rules/use-java-records.html)

## 3.11.0 <Badge vertical="middle" text="21.10.2021"/>

One new rule is shipped with release 3.11.0 of the jSparrow Maven Plugin:

* [Replace Stream Collect By ToList](/rules/rules/replace-stream-collect-by-to-list.html)


### jSparrow 4JDK8 Maven Plugin

jSparrow Maven plugin provides a separate version to support JDK 8 as runtime environment. 

#### What is this?

jSparrow 4JDK8 is a limited version of the jSparrow Maven Plugin that supports JDK 8 as runtime environment but does not include jSparrow rules related to the Java features introduced in Java 14 and above. 
The plugin goals and the syntax for the jSparrow YML configuration remain the same as the main version of jSparrow Maven Plugin.

::: warning
Use this version only in case the execution environment is restricted to JDK 8.
:::

#### How to configure?

Use the following following plugin entry to include jSparrow 4JDK8 Maven Plugin in the pom file: 

```XML
<build>
  <plugins>
    <plugin>
      <groupId>eu.jsparrow</groupId>
      <artifactId>jsparrow-4jdk8-maven-plugin</artifactId>
      <version>3.11.0</version>
    </plugin>
  </plugins>
</build>  
```

Note that the configuration for jSparrow 4JDK8 is very similar to the main jSparrow Maven Plugin version. Both are hosted on the same maven plugin repository.
The only difference to the main version is the artifactId that changed to `jsparrow-4jdk8-maven-plugin` for jSparrow 4JDK8, and remains the same `jsparrow-maven-plugin` for the main version.

#### How to run? 

The goal prefix for running jSparrow 4JDK8 remains `jsparrow`. 

### jSparrow Report `destination` Path

The default path for generating jSparrow Reports is changed to the default project build directory, which is typically the `target` folder in the project root.
Additionally, a new parameter `destination` is added to the report goal that allows users to specify a custom path for generating the jSparrow reports. E.g.:

```shell
mvn jsparrow:report -Ddestination='custom/path'
```

## 3.10.1 <Badge vertical="middle" text="23.09.2021"/>

Version 3.10.1 ads a new parameter `tempWorkspace` to [jsparrow:refactor](/maven/getting-started.html#refactor) and [jsparrow:report](/maven/getting-started.html#report) goals.
The new parameter allows users to define a custom location of the temporary Eclipse workspace that gets created to import the projects being analyzed by jSparrow. 
If not provided, jSparrow uses the Java temp directory for creating the workspace. 

The following command is an example of using the new parameter `tempWorkspace` in Linux: 
```shell
mvn jsparrow:refactor -DtempWorkspace="/home/John/tmp-jmp-workspace"
```

Similarly, the new parameter can be used on Windows, as follows:

```shell
mvn jsparrow:refactor -DtempWorkspace="C:\Users\John\tmp-jmp-workspace"
```

## 3.10.0 <Badge vertical="middle" text="16.09.2021"/>

Three new rules are shipped with release 3.10.0 of the jSparrow Maven Plugin:

* [Use Switch Expression](/rules/rules/use-switch-expression.html)
* [Use Text Block](/rules/rules/use-switch-expression.html)
* [Replace String Format by Formatted](/rules/rules/replace-string-format-by-formatted.html)

### Important Node

::: warning
The jSparrow Maven Plugin 3.10.0 requires Java 11 or later as a runtime environment. 
Future releases will provide an alternative version of jSparrow Maven Plugin to support Java 8. 
:::


## 3.8.0 <Badge vertical="middle" text="20.07.2021"/>

A new rule is shipped with release 3.8.0 of the jSparrow Maven Plugin:

* [Replace JUnit 3 Test Cases](/rules/rules/replace-j-unit3-test-cases.html)

### Improvements 

* Avoid occupying a licenese session when running the [`report`](/maven/getting-started.html#report) goal. 

## 3.7.0 <Badge vertical="middle" text="17.06.2021"/>

Three new rules are shipped with the midsummer release of jSparrow Maven Plugin 3.7.0:

* [Use Dedicated Assertions](/rules/use-dedicated-assertions.html)
* [Replace JUnit Assumptions with Hamcrest JUnit](/rules/replace-j-unit4-assumptions-with-hamcrest-j-unit.html)
* [Replace JUnit 4 Category with JUnit Jupiter Tag](/rules/replace-j-unit4-category-with-jupiter-tag.html)

## 3.6.0 <Badge vertical="middle" text="20.05.2021"/>

A new rule is shipped with release 3.6.0 of the jSparrow Maven Plugin:

* [Replace JUnit 4 Assumptions with JUnit Jupiter](/rules/replace-j-unit4-assumptions-with-jupiter.html)

## 3.5.0 <Badge vertical="middle" text="15.04.2021"/>

A new rule is shipped with release 3.5.0 of the jSparrow Maven Plugin:

* [Replace JUnit assertThat with Hamcrest](/rules/replace-j-unit-assert-that-with-hamcrest.html)

## 3.4.1 <Badge vertical="middle" text="25.03.2021"/>

This patch adds support for maven projects using [Lombok](https://projectlombok.org/). See more details on [Specifying the Lombok Agent](additional-configuration.html#specifying-the-lombok-agent).

## 3.4.0 <Badge vertical="middle" text="18.03.2021"/>

A new rule is shipped with release 3.4.0 of the jSparrow Maven Plugin:

* [Replace JUnit 4 Assertions with JUnit Jupiter](/rules/replace-j-unit4-assertions-with-jupiter.html)

## 3.3.1 <Badge vertical="middle" text="03.03.2021"/>

Version 3.3.1 fixes rare issues with the rules [Replace Expression Lambda with Method Reference](/rules/lambda-to-method-reference.html) and [Remove Redundant Type Casts](/rules/remove-redundant-type-cast.html). 

## 3.3.0 <Badge vertical="middle" text="18.02.2021"/>

A new rule is shipped with release 3.3.0 of the jSparrow Maven Plugin:

* [Replace JUnit 4 Annotations with JUnit Jupiter](/rules/replace-j-unit4-annotations-with-jupiter.html)

### Improvements
* [Use Secure Random](/rules/use-secure-random.html) - the rule id changes from `UseSecureRandomRule` to `UseSecureRandom`.

## 3.2.1 <Badge vertical="middle" text="03.12.2020"/>

Version 3.2.1 of the jSparrow Maven plugin fixes an issue with the [`selectedSources`](/maven/getting-started.html#refactor) parameter on Windows 10. 

## 3.2.0 <Badge vertical="middle" text="21.01.2021"/>

A new rule is shipped with release 3.2.0 of the jSparrow Maven Plugin:

* [Replace JUnit Timeout Annotation Property with assertTimeout](/rules/replace-j-unit-timeout-annotation-property.html)

## 3.1.0 <Badge vertical="middle" text="17.12.2020"/>

Three new rules are shipped with the winter solstice release of jSparrow Maven Plugin 3.1.0:

* [Replace JUnit ExpectedException with assertThrows](/rules/replace-j-unit-expected-exception.html)
* [Replace JUnit Expected Annotation Property with assertThrows](/rules/replace-j-unit-expected-annotation-property.html)
* [Use Files.writeString](/rules/use-files-write-string.html)

## 3.0.1 <Badge vertical="middle" text="03.12.2020"/>

Version 3.0.1 of the jSparrow Maven plugin fixes an issue with Java 11 and the newly introduced [`formatter`](/maven/additional-configuration.html#eclipse-formatter-file) parameter. 

## 3.0.0 <Badge vertical="middle" text="19.11.2020"/>

jSparrow Maven Plugin 3.0.0 arrives with a new feature that makes the jSparrow's static analysis capacity available to everyone.
Additional features are introduced that allow users to provide a customized formatter and to select specific source files that shall be considered for refactoring.

### [The jSparrow `report` Goal](/maven/getting-started.html#report)

This goal is introduced to allow users to try the jSparrow Maven plugin on their sources for free. 
Similar to the [`refactor`](/maven/getting-started.html#refactor) goal, the `report` goal analyzes the project and computes refactorings with the selected rules.  
As a result, jSparrow generates an HTML report with the computed findings. 
Similar reports are available in the statistics page (e.g., for [jenkins-core](/statistics/jenkins-statistics.html?p=jenkins-core)).  

The `report` goal supports the same parameters as the `refactor` goal. 

### The `formatter` Parameter

A parameter is introduced in the `refactor` goal, to allow users to specify a customized Eclipse formatter. 
The formatter can be exported from the Eclipse IDE and provided to the `refactor` goal through `-Dformatter=<path-to-formatter>` parameter. 
The specified formatter is used by the [Reformat Code](/rules/code-formatter.html) rule so that it provides the same styling as the customized formatter in the Eclipse IDE. 

A more detailed description can be found at: [Eclipse Formatter File](/maven/additional-configuration.html#eclipse-formatter-file). 

### The `selectedSources` Parameter

A parameter `-DselectedSources=<glob-expressions>` is introduced in the `refactor` goal (and the `report` goal) to allow users to specify sources that jSparrow shall consider for refactorings.  
The sources can be specified by using [glob expressions](https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html#glob). 
Find more information in the parameters description of [`refactor`](/maven/getting-started.html#refactor) goal. 


### New Rule 

* [Use Comparator Methods](/rules/use-comparator-methods.html) is a new refactoring rule that simplifies [`Comparator`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) usages by making use of convenience methods added to the API in Java 8.

## 2.19.0 <Badge vertical="middle" text="15.10.2020"/>

A new rule is shipped with release 2.19.0 of the jSparrow Maven Plugin:

* [Use Files.newBufferedWriter](/rules/use-files-buffered-writer.html)

## 2.18.0 <Badge vertical="middle" text="17.09.2020"/>

Four new rules are shipped with release 2.18.0 of the jSparrow Maven Plugin:

* [Create Temp Files Using Java NIO](/rules/create-temp-files-using-java-nio.html)
* [Use Files.newBufferedReader](/rules/use-files-buffered-reader.html)
* [Use Offset Based String Methods](/rules/use-offset-based-string-methods.html)
* [Use Predefined Standard Charset](/rules/use-predefined-standard-charset.html)

## 2.17.0 <Badge vertical="middle" text="20.08.2020"/>

Two new rules are shipped with release 2.17.0 of the jSparrow Maven Plugin:

* [Reuse Random Objects](/rules/reuse-random-objects.html)  
* [Use SecureRandom](/rules/use-secure-random.html)

## 2.16.0 <Badge vertical="middle" text="16.07.2020"/>

A new rule is shipped with release 2.16.0 of the jSparrow Maven Plugin:

* [Use Parameterized LDAP Query](/rules/use-parameterized-ldap-query.html)

## 2.15.0 <Badge vertical="middle" text="18.06.2020"/>

Three additional rules are shipped with the release 2.15.0 of the jSparrow Maven Plugin: 

* [Use Parameterized JPA Query](/rules/use-parameterized-jpa-query.html)
* [Avoid Concatenation in Logging Statements](/rules/avoid-concatenation-in-logging-statements.html)
* [Use Arrays Stream](/rules/use-arrays-stream.html)

## 2.14.0 <Badge vertical="middle" text="20.05.2020"/>

Another security rule is shipped with release 2.14.0 of the jSparrow Maven Plugin:

* [Escape User Inputs in SQL Queries](/rules/escape-user-inputs-in-sql-queries.html)

## 2.13.0 <Badge vertical="middle" text="16.04.2020"/>

A new rule is shipped with release 2.13.0 of the jSparrow Maven Plugin:

* [Use Parameterized Query](/rules/use-parameterized-query.html)

## 2.12.0 <Badge vertical="middle" text="19.03.2020"/>

Three new rules are shipped with release 2.12.0 of the jSparrow Maven Plugin:

* [Use String Join](/rules/use-string-join.html) 

* [Remove Redundant Type Casts](/rules/remove-redundant-type-cast.html)

* [Remove Collection::addAll](/rules/remove-collection-add-all.html)


## 2.11.0 <Badge vertical="middle" text="20.02.2020"/>

A new rule is shipped with release 2.11.0 of the jSparrow Maven Plugin:

* [Use Optional::filter](/rules/optional-filter.html)

## 2.10.0 <Badge vertical="middle" text="30.01.2020"/>

Release 2.10.0 of the jSparrow Maven Plugin contains a new rule:

* [Use Optional::map](/rules/optional-map.html)

## 2.9.0 <Badge vertical="middle" text="19.12.2019"/>

Release 2.9.0 adds a new rule to the jSparrow Maven Plugin:

* [Make Fields And Variables Final](/rules/make-fields-and-variables-final.html)

## 2.8.0 <Badge vertical="middle" text="21.11.2019"/>

Release 2.8.0 brings a new rule to the jSparrow Maven Plugin:

* [Hide Default Constructor In Utility Classes](/rules/hide-default-constructor-in-utility-classes.html)

## 2.7.0 <Badge vertical="middle" text="31.10.2019"/>

Release 2.7.0 intorduces a new rule:

* [Use Optional::ifPresentOrElse](/rules/optional-if-present-or-else.html)

## 2.6.0 <Badge vertical="middle" text="19.09.2019"/>

Release 2.6.0 provides a new rule:

* [Insert Break Statements in For-loops](/rules/insert-break-statement-in-loops.html)

## 2.5.0 <Badge vertical="middle" text="14.08.2019"/>

Release 2.5.0 of the jSparrow Maven Plugin contains two new rules:

* [Use Collections Singleton List](/rules/use-collections-singleton-list.html)
* [Remove Null-Checks Before Instanceof](/rules/remove-null-check-before-instanceof.html)

## 2.4.0 <Badge vertical="middle" text="18.07.2019"/>

The jSparrow Maven Plugin 2.4.0 introduces two new rules for Java 9 and above: 
* [Replace For-Loop with Stream::takeWhile](/rules/enhanced-for-loop-to-stream-take-while.html).
* [Use Factory Methods for Collections](/rules/collections-factory-methods.html).

## 2.3.0 <Badge vertical="middle" text="19.06.2019"/>

The jSparrow Maven Plugin 2.3.0 introduces two new rules: 
* [Reorder Modifiers](/rules/reorder-modifiers.html).
* [Replace Collection.sort with List.sort](/rules/use-list-sort.html).

## 2.2.0 <Badge vertical="middle" text="16.05.2019"/>

This release provides a new rule:

* [Replace Map::get by Map::getOrDefault](/rules/map-get-or-default.html)

## 2.1.0 <Badge vertical="middle" text="18.04.2019"/>

The jSparrow Maven Plugin release 2.1.0 includes:

* A new rule for [Removing Unused Parameters in Private Methods](/rules/remove-unused-parameter.html)
* Stability improvements for [StringBuilder() to StringBuffer()](/rules/string-buffer-to-builder.html) rule. 

## 2.0.1 <Badge vertical="middle" text="03.04.2019"/>

This version adds proxy support for the jSparrow Maven plugin. See [Setup Proxy](/maven/additional-configuration.html#setup-proxy) for more information. 

## 2.0.0 <Badge vertical="middle" text="28.03.2019"/>

Version 2.0.0 brings a lot of new rules, better performance and a lot of general improvements.

### New Ruleset

This release contains [55 automatic refactoring rules](/rules/):

* All rules of the jSparrow Eclipse plugin 3.3.0 are included in this release, except for the [Organize Imports](/rules/organize-imports.html) rule.
* The previously excluded rules [System Out To Logging](/rules/standard-logger.html) and [Rename Fields](/rules/field-renaming.html) have now been added!

### Performance Improvements

* By using an improved dependency mechanism the start time of the jSparrow Maven plugin has been improved significantly.

### Java 11 Support

* The jSparrow Maven plugin can now be executed with a Maven version using Java 11.

### Usability and General Improvements

* A [help mojo](/maven/getting-started.html#help) has been added.
* The YAML parsing has been improved in regards to functionality and user feedback (e.g., warnings for non-existing packages or classes).
* Error messages have been improved.

### Source and Module Discovery

The Maven module handling has been improved.

* Maven modules defined in profiles can now be located.
* Non-default source folders can now be used (e.g., folders not following the `src/main/java` schema).
* Supported packaging types are now `jar` and `war`.

### Installation

Have a look at the [installation instructions](/maven/getting-started.html#installation) for more information!

## 1.0.0 <Badge vertical="middle" text="25.06.2018"/>

This version contains all the features and all the rules of the [jSparrow Eclipse plugin 2.5.0](/eclipse/release-notes.html#_2-5-0) except [Organize Imports](/rules/organize-imports.html), [System Out To Logging](/rules/standard-logger.html), and [Rename Fields](/rules/field-renaming.html).

The download can be found at [jSparrow Maven plugin](https://download.jsparrow.eu/)
