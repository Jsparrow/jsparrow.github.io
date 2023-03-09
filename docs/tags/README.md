---
title: Tags
sidebarDepth: 3
---

# Tags

Tags describe properties of [jSparrow rules](/rules/) with the intent of grouping similar rules together and making them easier to find and search for. 

## Coding Conventions

Coding conventions for Java consist of a set of recommended code styles and best practices. 
Rules with this tag will alter source code parts to follow guides such as the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html) more closely. 

<Tag tag-name="Coding Conventions" />

## Free rules for jSparrow Eclipse IDE

The following rules are included in the *free trial* version for Eclipse IDE. 
<br>
You can apply these refactorings to your system-wide code with a trial key:  
[Register for a Free Trial](https://jsparrow.io/try-free/).

<Tag tag-name="Free" />

<div style="border: 2px dashed #83b9ff;padding: 2rem;">

### System-wide Refactoring
*Do you want to automate many more refactorings to your system-wide code?*
The automatic application of all jSparrow rules can be unlocked by acquiring *[your jSparrow license](https://jsparrow.io/pricing/).*

<img src="/jsparrow-comic-pointing-at-a-graph.PNG" width="200" alt="a drawn cute bird pointing at a graph that shows positive results">

</div>

## IO Operations

This tag marks rules that deal with I/O operations provided by [`java.io`](https://docs.oracle.com/javase/8/docs/api/java/io/package-summary.html) or [`java.nio`](https://docs.oracle.com/javase/8/docs/api/java/nio/package-summary.html). 

<Tag tag-name="IO Operations" />

## Lambda

Lambda expressions are anonymous and unnamed functions that enable you to treat functionality as a method argument or code as data. Lambda expressions are an integral part of the `java.util.stream` API.  

Whenever a rule has this tag, it means that either a lambda expression is introduced or manipulated. 

<Tag tag-name="Lambda" />

## Logging

Logging frameworks ease and standardize the process of logging for the Java platform. In particular, they provide flexibility by avoiding explicit output to the console. The location where logs are written becomes independent of the code and can be customized at runtime.

Rules marked with this tag either introduce logging or improve aspects of the same. 

<Tag tag-name="Logging" />

## Loop

A loop is an instruction that repeats until a specified condition is reached. Examples would be `for`, `while`, or `forEach` loops. Respectively, rules with this tag will interact with such loops. 

<Tag tag-name="Loop" />


## Marker

The "marker" tag marks rules that include quick-fixes. Markers give developers the ability to click and choose an automatic fix to various problems during programming. jSparrow's markers i.e. quick fixes can be used to make refactoring much faster.

<Tag tag-name="Marker" />

## Old Language Constructs

With additions to the Java platform, a shift towards new best practices is not uncommon, leading to old language constructs that can be improved by using more modern alternatives. 

jSparrow rules having this tag replace such constructs with more up-to-date alternatives. 

<Tag tag-name="Old Language Constructs" />

## Performance

Performance in programs is usually related to avoiding unnecessary computations, optimizing loops, or using efficient methods provided by common APIs. 

For rules, this tag indicates that a code fragment is replaced by a more performant one. 

<Tag tag-name="Performance" />

## Readability

Readability refers to the ease with which a human reader can comprehend the purpose, control flow, and operation of source code. It affects aspects of quality, including portability, usability, and most importantly maintainability.

According to that, rules marked with this tag improve on such aspects. 

<Tag tag-name="Readability" />

## Security

Security issues refer to vulnerabilities that can be exploited by an attacker to perform unauthorized actions within a computer program. 
Rules marked with this tag replace vulnerable code fragments with secure alternatives. 

<Tag tag-name="Security" />

## String Manipulation

String manipulation is the process of creating, parsing, or changing `String` variables or literals. Typical operations on strings include a concatenation of values or the creation of a `String` output based on the input of another type. 

jSparrow rules having this tag will therefore be related to such `String` operations. 

<Tag tag-name="String Manipulation" />

## Testing
jSparrow rules having this tag encourage using best practices in the test code. 
<tag tag-name="Testing"/>

## JUnit
jSparrow rules having this tag are designed to improve JUnit test cases by making use of the new features in [JUnit 5](https://junit.org/junit5/docs/current/user-guide/) and other related testing libraries. 
<tag tag-name="JUnit"/>

## AssertJ
jSparrow rules having this tag encourage best practices on using the [AssertJ](https://assertj.github.io/doc/#assertj-overview) library for writing fluent assertions in unit tests.
<tag tag-name="AssertJ"/>

## Spring
jSparrow rules having this tag encourage best practices on using the [Spring](https://spring.io/projects/spring-framework) library for writing web applications.
<tag tag-name="Spring"/>

## Java Version Tags

Each rule has one Java version related tag, indicating the minimum required Java version of a project to apply the rule. 

### Java 1.1

<Tag tag-name="Java 1.1" />

### Java 1.2 

<Tag tag-name="Java 1.2" />

### Java 1.3

<Tag tag-name="Java 1.3" />

### Java 1.4

<Tag tag-name="Java 1.4" />

### Java 5

<Tag tag-name="Java 5" />

### Java 6

<Tag tag-name="Java 6" />

### Java 7

<Tag tag-name="Java 7" />

### Java 8

<Tag tag-name="Java 8" />

### Java 9

<Tag tag-name="Java 9" />

### Java 10

<Tag tag-name="Java 10" />

### Java 11

<Tag tag-name="Java 11" />

### Java 14

<Tag tag-name="Java 14" />

### Java 15

<Tag tag-name="Java 15" />

### Java 16

<Tag tag-name="Java 16" />