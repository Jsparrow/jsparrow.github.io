---
title: Reorder String Equality Check 
description:
    Moves the string literals in the left-hand-side of equals() or equalsIgnoreCase() when checking for equality.
---

# Reorder String Equality Check

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 1.1     |
| Remediation cost                | 10 min |
| Links                           | [S1132](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1132&rule_key=squid%3AS1132) |

## Description

To avoid NullPointerExceptions , it is recommended to put string literals in the left-hand-side of `equals()` or `equalsIgnoreCase()` when checking for equality.

## Benefits

This order prevents null pointer exceptions from being raised, as a string literal can never be null by definition, and therefore makes the code less prone to errors. An example can be seen above.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, String Manipulation
:::

## Code Changes

__Pre__

```java
getClass().getName().equals("Foo");
```

__Post__
```java
"Foo".equals(getClass().getName());
```
