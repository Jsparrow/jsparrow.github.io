---
title: Replace Concatenation with Infix-Operation
description:
    This rule replaces the `concat()` method on `String`s with the `+` operator.
tags: ["Rule", "Java 1.1", "String Manipulation", "Performance"]
---

# Replace Concatenation with Infix-Operation

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0) |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           |       |

## Description

This rule replaces the `concat()` method on `String`s with the `+` operator.

For example, `s = s.concat("bar")` becomes `s = s + "bar"`. This improves readability and performance for
 chained concatenations.

## Benefits

Applying this rule has slight performance benefits and arguably improves readability.
The Java compiler will convert the `+` operation to use a `StringBuilder`.
The more concatenations occur, the bigger the performance gain is.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Base case
__Pre__
```java
String s = "foo";
s = s.concat("bar");
```

__Post__
```java
String s = "foo";
s = s + "bar";
```

### Chained concatenation expression
__Pre__
```java
input.concat("abc").concat("cde").concat("fgh".concat("hij"));
```

__Post__
```java
input + "abc" + "cde" + "fgh" + "hij";
```

### Nested concatenation expressions

__Pre__
```java
input.concat(param.concat(param));
```

__Post__
```java
input + param + param;
```
