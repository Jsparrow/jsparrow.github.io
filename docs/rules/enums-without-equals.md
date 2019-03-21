---
title: Replace equals() on Enum Constants
description:
    Replaces occurrences of 'equals()' on Enum constants with an identity comparison (==).
    In the case the equals relation is wrapped with an boolean negation the result will be an not equals (!=).
tags: ["Free", "Java 5", "Coding Conventions"]
---

# Replace equals() on Enum Constants

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.2.0](/eclipse/release-notes.html#_2-2-0) |
| Minimum Java version            | 5     |
| Remediation cost                | 2 min |
| Links                           |  |

## Description

Replaces occurrences of `equals()` on Enum constants with an identity comparison (`==`).
In the case the equals relation is wrapped with an boolean negation the result will be an not equals (`!=`).

## Benefits

Technically, equals and `==` are the same. `==` however is null safe and thus can help avoid programming errors.

## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Enum in right-hand-side
__Pre__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return roundingMode.equals(RoundingMode.UP);
}
```

__Post__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return roundingMode == RoundingMode.UP;
}
```

### Enum in left-hand-side
__Pre__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return RoundingMode.UP.equals(roundingMode);
}
```

__Post__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return RoundingMode.UP == roundingMode;
}
```

### Enum in infix expression
__Pre__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return !RoundingMode.UP.equals(roundingMode);
}
```

__Post__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return !(RoundingMode.UP == roundingMode);
}
```