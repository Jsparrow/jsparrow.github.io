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
Naturally, an `instanceof` expression is followed by a local variable declaration initialized with a casting expression. 
Pattern Matching for instanceof combines these three steps (i.e., type checking, variable declaration, and type casting) into a single step, thus reducing boilerplate code and eliminating sources of errors. 

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

### Pattern Matching in If Statement

__Pre__
```java
if(o instanceof String) {
    String value = (String)o;		
    showValue(value);
}
```

__Post__
```java
if(o instanceof String value) {
    showValue(value);
}
```

### Pattern Matching in If-Then-Else Statement

__Pre__
```java
if (!(o instanceof String)) {
    dontShowValue();
} else {
    String value = (String) o;
    showValue(value);
}
```

__Post__
```java
if (!(o instanceof String value)) {
    dontShowValue();
} else {
    showValue(value);
}
```

### Pattern Matching with Return Statement

__Pre__
```java
if (!(o instanceof String)) {
    dontShowValue();
    return false;
}
String value = (String)o;
showValue(value);
return "Olympics 2020".equals(value);
```

__Post__
```java
if (!(o instanceof String value)) {
    dontShowValue();
    return false;
}
showValue(value);
return "Olympics 2020".equals(value);
```

<VersionNotice />

## Properties

<RuleProperties />
