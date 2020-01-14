---
title: Use equals() on Primitive Objects
ruleId: PrimitiveObjectUseEquals
since: 2.2.0
minJavaVersion: 1.1
remediationCost: 2
links:
description:
    This rule replaces the infix operators "==" and "!=" with 'equals()' when used on primitive objects.
tags: ["Java 1.1", "Coding Conventions", "String Manipulation"]
---

# Use equals() on Primitive Objects

[[toc]]

## Properties

<RuleProperties />


## Description

This rule replaces the infix operators "==" and "!=" with equals() when used on primitive objects. The following types are considered primitive:

* java.lang.Byte
* java.lang.Char
* java.lang.Short
* java.lang.Integer
* java.lang.Long
* java.lang.float
* java.lang.Double
* java.lang.Boolean
* java.lang.String

## Benefits

If the equals method was overwritten on the instances being compared the == has a different meaning than using equals. This may lead to programming errors. Applying this rule means keeping with the coding conventions and thus helps avoid errors.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

```java
Integer a = new Integer(1);
Integer b = new Integer(2);

if (a == b) {
}

if (a != b) {
}
```

__Post__

```java
Integer a = new Integer(1);
Integer b = new Integer(2);

if (a.equals(b)) {
}

if (!a.equals(b)) {
}
```

<VersionNotice />

