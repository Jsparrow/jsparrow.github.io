---
title: Shift AssertJ Description Before Assertion
ruleId: UseSwitchExpression
since: 4.6.0
minJavaVersion: 5
remediationCost: 5
    
description:
    AssertJ Description only make sense to be invoked before the assertion itself. Otherwise they have no effect.

tags: ["Java 5", "Testing", "AssertJ", "Coding Conventions"]
---

# Shift AssertJ Description Before Assertion

## Description

AssertJ Description only make sense to be invoked before the assertion itself. Otherwise they have no effect.

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

### Initializing Variable

__Pre__
```java

```

__Post__
```java

```

### Computing the Returned Value

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .as("Asserting correct user name");
```

__Post__
```java
assertThat(user.getName())
    .as("Asserting correct user name")
    .isEqualTo("John");
```

### Labeled Cases Switch Statement

__Pre__
```java
assertThat(user.getName())
    .isEqualTo("John")
    .withErrorMessage("Asserting correct user name");
```

__Post__
```java
assertThat(user.getName())
    .withErrorMessage("Asserting correct user name")
    .isEqualTo("John");
```


<VersionNotice />

## Properties

<RuleProperties />
