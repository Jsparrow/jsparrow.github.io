---
title: Use Dedicated AssertJ Assertions
ruleId: UseDedicatedAssertJAssertions
since: 4.7.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S5838"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5838&q=S5838"
description:
    This rule finds AssertJ assertions that can be simplified and replaces the with equivalent dedicated assertions.

tags: ["Java 8", "Testing", "AssertJ", "Coding Conventions", Readability]
---

# Use Dedicated AssertJ Assertions

## Description

AssertJ contains a rich API for writing specific assertions about different types of objects. 
Making use of the appropriate dedicated methods when writing certain assertions will simplify the test code and improve the corresponding failure messages. 
This rule finds AssertJ assertions that can be simplified and replaces the with equivalent dedicated assertions.  

::: warning Requirements
* AssertJ [3.20.2 - 3.22.x]
:::

## Benefits

Simplifies the test code and improves the assertion failure messages.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Case 1

__Pre__
```java

```

__Post__
```java

```

### Case 2

__Pre__
```java

```

__Post__
```java

```

<VersionNotice />

## Properties

<RuleProperties />
