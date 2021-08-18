---
title: Use Pattern Matching for Instanceof
ruleId: UsePatternMatchingForInstanceof
since: 4.2.0
minJavaVersion: 16
remediationCost: 5
    
description:
    This rule replaces instanceof expressions by instanceof expressions with Pattern Matching which is introduced in Java 16.
tags: ["Java 16", "Old Language Constructs", "Readability"]
---

# Use Pattern Matching for Instanceof

## Description

This rule replaces instanceof expressions by instanceof expressions with Pattern Matching which is introduced in Java 16. 
For example, a piece of code like "if(o instanceof String)" can be transformed to "if(o instanceof String value)".

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
