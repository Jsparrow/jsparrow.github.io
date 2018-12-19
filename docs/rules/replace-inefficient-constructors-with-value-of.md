---
title: Replace Inefficient Constructors with valueOf()
description:
   All calls to a constructor of a primitive type will be replaced by the corresponding static valueOf() method. For example 'new Integer("1")' becomes 'Integer.valueOf("1")'.
tags: ["rule"]
---

# Replace Inefficient Constructors with valueOf()

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0) |
| Minimum Java version            | 5     |
| Remediation cost                | 5 min |
| Links                           | [S2129](https://sonarcloud.io/organizations/default/rules#rule_key=squid%3AS2129) |

## Description

All calls to a constructor of a primitive type will be replaced by the corresponding static valueOf() method. For example 'new Integer("1")' becomes 'Integer.valueOf("1")'.

## Benefits

Using this rule saves memory and CPU cycles, as the constructors are not needed in this case. Furthermore, the constructors are deprecated in Java 9, which is an indication that they will eventually be removed from the language altogether.

## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
Java 5, Coding Conventions, Performance
:::

## Code Changes

### Number object types

The following change applies for Integer, Double, Float and Long.

__Pre__

```java
new Integer(1);

new Integer("1");
```

__Post__

```java
Integer.valueOf(1);

Integer.valueOf("1");
```

### Boolean objects

__Pre__

```java
new Boolean(true);
new Boolean("true");
new Boolean(false);
new Boolean("false");
new Boolean("anyOtherStringThanTrue");
new Boolean((String) input);
new Boolean((Boolean) input);
```

__Post__

```java
Boolean.valueOf(true);
Boolean.valueOf(true);
Boolean.valueOf(false);
Boolean.valueOf(false);
Boolean.valueOf(false);
Boolean.valueOf((String) input);
Boolean.valueOf((Boolean) input);
```
