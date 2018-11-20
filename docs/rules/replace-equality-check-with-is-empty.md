---
title: Replace Equality Check with isEmpty()
description:
    This rule replaces comparisons of length() or size() with 0 with a call to isEmpty(). Any occurrences of such a comparison will be replaced, regardless of surrounding control structure.
---

# Replace Equality Check with isEmpty()

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 2.0.2 |
| Minimum Java version            | 6 |
| Remediation cost                | 2 min |
| Links                           | [Squid:S1155](https://sonarcloud.io/organizations/default/rules?rule_key=squid%3AS1155) |

## Description

This rule replaces comparisons of length() or size() with 0 with a call to isEmpty(). Any occurrences of such a comparison will be replaced, regardless of surrounding control structure.

## Benefits

The time complexity of any isEmpty() method implementation should be O(1) whereas some implementations of size() can be O(n). Thus, using this rule provides performance benefits.

## Requirement & Tags

::: warning Requirements
Java 6
:::

::: tip Tags
Java 6, Old Language Constructs, Coding Conventions, Readability
:::

## Code Changes

### size, length

__Pre__

```java
Map<String, String> m = new HashMap<>();
m.size() == 0;
String s = "";
s.length() == 0;
```

__Post__

```java
Map<String, String> m = new HashMap<>();
m.isEmpty();
String s = "";
if(s.isEmpty());
```