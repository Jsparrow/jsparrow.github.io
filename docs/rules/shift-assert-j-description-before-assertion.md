---
title: Shift AssertJ Description Before Assertion
ruleId: ShiftAssertJDescriptionBeforeAssertion
since: 4.6.0
minJavaVersion: 7
remediationCost: 5
links:
    - displayName: "S5833"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5833&q=S5833"
    - displayName: "Avoiding incorrect usage"
      url: https://assertj.github.io/doc/#assertj-core-incorrect-usage
description:
    This rule shifts the invocation of methods setting descriptions or error messages before the invocations of the actual assertions they intend to describe. 

tags: ["Java 7", "Testing", "AssertJ", "Coding Conventions"]
---

# Shift AssertJ Description Before Assertion

## Description

AssertJ provides methods for setting descriptions or error messages of assertions, e.g.:
* [as](https://www.javadoc.io/doc/org.assertj/assertj-core/3.2.0/org/assertj/core/api/Descriptable.html#as-java.lang.String-java.lang.Object...-)
* [describedAs](https://www.javadoc.io/doc/org.assertj/assertj-core/3.2.0/org/assertj/core/api/Descriptable.html#describedAs-java.lang.String-java.lang.Object...-)
* [withFailMessage](https://javadoc.io/doc/org.assertj/assertj-core/2.3.0/org/assertj/core/api/AbstractAssert.html#withFailMessage(java.lang.String,%20java.lang.Object...)) 
* [overridingErrorMessage](https://javadoc.io/doc/org.assertj/assertj-core/2.3.0/org/assertj/core/api/AbstractAssert.html#overridingErrorMessage(java.lang.String,%20java.lang.Object...))
* etc...

These methods should always be invoked before the actual assertion they intend to describe, otherwise, they have no effect. 

This rule, swaps the invocation of the assertion methods with the invocation of the methods setting descriptions or the error messages for the corresponding assertions.
See the code examples below.  

::: warning Requirements
* AssertJ
:::

## Benefits

Improves AssertJ report messages and error messages. 

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Shifting `describedAs`

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .describedAs("Asserting the correct username");
```

__Post__
```java
assertThat(user.getName())
    .describedAs("Asserting the correct username")
    .isEqualTo("John");
```

### Shifting `as`

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .as("Asserting the correct username");
```

__Post__
```java
assertThat(user.getName())
    .as("Asserting the correct username")
    .isEqualTo("John");
```

### Shifting `withErrorMessage`

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .withErrorMessage("Unexpected username");
```

__Post__
```java
assertThat(user.getName())
    .withErrorMessage("Unexpected username")
    .isEqualTo("John");
```

### Shifting `overridingErrorMessage`

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .overridingErrorMessage("Unexpected username");
```

__Post__
```java
assertThat(user.getName())
    .overridingErrorMessage("Unexpected username")
    .isEqualTo("John");
```

<VersionNotice />

## Properties

<RuleProperties />
