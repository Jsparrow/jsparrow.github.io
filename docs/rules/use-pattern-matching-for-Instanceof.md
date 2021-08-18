---
title: Use Pattern Matching for Instanceof
ruleId: UsePatternMatchingForInstanceof
since: 4.2.0
minJavaVersion: 16
remediationCost: 5
    
description:
    This rule replaces instanceof expressions by Pattern Matching for instanceof expressions introduced in Java 16.
tags: ["Java 16", "Old Language Constructs", "Readability"]
---

# Use Pattern Matching for Instanceof

## Description

This rule replaces instanceof expressions by [Pattern Matching for instanceof](https://openjdk.java.net/jeps/394) introduced in Java 16. 

It is very common for Java programs to contain logic that combines type checking using `instanceof` with explicit type casting. 
Naturaly, an `instanceof` expression is followed by a local variable declaration initialized with a casting expression. 
The Pattern Matching for Instanceof combines the three steps (i.e., type checking, variable declaration and type casting) into a single step, thus reducing some boilerplate code and eliminating sources of errors. 

::: warning Requirements
* Java 16
:::

## Benefits

Removes code clutter. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Sample One

__Pre__
```java

```

__Post__
```java

```

### Sample Two

__Pre__
```java

```

__Post__
```java

```

<VersionNotice />

## Properties

<RuleProperties />
