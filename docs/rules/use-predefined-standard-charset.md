---
title: Use Predefined Standard Charset
ruleId: UsePredefinedStandardCharset
since: 3.21.0
minJavaVersion: 1.7
remediationCost: 5
links:
    - displayName: "Use Predefined Standard Charset"


description:
    This rule replaces invocations of 'java.nio.charset.Charset.forName(String)' by references to the respective constants declared in 'java.nio.charset.StandardCharsets'.
tags: ["Java 1.7", "Performance"]
---

# Use Predefined Standard Charset

[[toc]]

## Properties

<RuleProperties />

## Description

An invocation of [`java.nio.charset.Charset.forName(stringLiteral)`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html#forName(java.lang.String)) can be replaced by a reference to one of the contants declared in [`java.nio.charset.StandardCharsets`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/StandardCharsets.html) if its argument is a String literal which represents one of these constants.

## Benefits

Improvement of performance by referencing a constant instead of calling a method.


## Code Changes


### Using Charset forName with "UTF-8"

__Pre__
```java
    Charset c = Charset.forName("UTF-8");
```

__Post__
```java
    Charset c = StandardCharsets.UTF_8;
```

### Using Charset forName with "US-ASCII"

__Pre__
```java
    Charset c = Charset.forName("US-ASCII");
```

__Post__
```java
    Charset c = StandardCharsets.US_ASCII;
```

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::