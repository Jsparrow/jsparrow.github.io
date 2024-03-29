---
title: Use StringBuilder::append
ruleId: UseStringBuilderAppend
since: 2.7.0
minJavaVersion: 5
remediationCost: 2
links:
    - displayName: "S1643"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1643&q=S1643"
    
description:
    Replaces the infix operator + on String concatenation by 'StringBuilder::append'
tags: ["Java 5", "String Manipulation", "Performance", "Marker"]
---

# Use StringBuilder::append

## Description

Replaces the infix operator `+` over `String` concatenations with at least three operands by `StringBuilder::append`. When possible, unwraps the parenthesized expressions.

## Benefits

Improves the performance of the String concatenations.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Concatenating strings in infix expressions

__Pre__

```java
String value = "prefix" + "value" + "suffix";
```

__Post__

```java
String value = new StringBuilder().append("prefix")
    .append("value")
    .append("suffix")
    .toString();
```

### Resolving types of arithmetic expressions

__Pre__

```java
String value = "prefix" + 2 * 3 + ("value" + 2 + 3) + (4 + 5) + "suffix";
```

__Post__

```java
String value = new StringBuilder().append("prefix")
    .append(2*3)
    .append("value")
    .append(2)
    .append(3)
    .append(4 + 5)
    .append("suffix")
    .toString();
```

### Resolving types of numeric literals

__Pre__

```java
String value = 5 + " (five) = " + 3 + " (three) + " + 2 + " (two).";
```

__Post__

```java
String value = new StringBuilder().append(5)
    .append(" (five) = ")
    .append(3)
    .append(" (three) + ")
    .append(2)
    .append(" (two).")
    .toString();

```

## Limitations

If at least two of the first operands of the expression are numeric additions then the expression is evaluated by Java as numeric expression rather than String expression. Therefore, the transformation is not performed. E.g.:

__Pre__

```java
String value = 2 + 3 + "";
```

<VersionNotice />


## Properties

<RuleProperties />
