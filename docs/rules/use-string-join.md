---
title: Use String Join
ruleId: UseStringJoin
since: 3.15.0
minJavaVersion: 8
remediationCost: 5
    
description:
    Replaces stream Collectors that are used for concatenating values of a collection with StringJoiner.
tags: ["Performance", "String Manipulation"]
---

# Use String Join

[[toc]]

## Properties

<RuleProperties />

## Description

Java 8 introduced String.join which is a convenient method for concatenating String values of `Iterable`s. 
This rule replaces String concatenations performed using [Collectors.joining()](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html#joining-java.lang.CharSequence-) with concatenations using [String.join()](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#join-java.lang.CharSequence-java.lang.Iterable-). 
A performance improvement can be observed with the increase of the number of elements in the Iterable. 

## Benefits

Improves performance and reduces code clutter. 

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Concatenating without delimiter

__Pre__
```java
String result = values.stream().collect(Collectors.joining());
```

__Post__
```java
String result = String.join("", values);
```

### Concatenating with delimiter
__Pre__
```java
String result = values.stream().collect(Collectors.joining(","));
```

__Post__
```java
String result = String.join(",", values);
```

### Using static imports
__Pre__
```java
String result = values.stream().collect(joining(","));
```

__Post__
```java
String result = String.join(",", values);
```


<VersionNotice />