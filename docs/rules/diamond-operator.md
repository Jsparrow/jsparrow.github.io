---
title: Remove Explicit Type Argument
ruleId: DiamondOperator
since: 1.0.0
minJavaVersion: 7
remediationCost: 1
links: "[S2293](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2293&q=The+diamond+operator+%28%22%3C%3E%22%29+should+be+used+)"
description:
    Since Java 1.7 the Diamond Operator (<>) can be used to simplify instance creation where generics are involved.
tags: ["Java 7", "Readability"]
defaultConfiguration: true
---

# Remove Explicit Type Argument

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0) |
| Minimum Java version            | 7     |
| Remediation cost                | 1 min |
| Links                           | [S2293](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2293&q=The+diamond+operator+%28%22%3C%3E%22%29+should+be+used+) |

## Description

Since Java 7 the [Diamond Operator](https://docs.oracle.com/javase/7/docs/technotes/guides/language/type-inference-generic-instance-creation.html) (`<>`) can be used to simplify instance creation where generics are involved.

## Benefits

Applying this rule reduces clutter and improves readability.

## Requirement & Tags

::: warning Requirements
Java 7
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Type arguments on new instance creations
__Pre__
```java
Map<String, List<String>> myMap = new HashMap<String, List<String>>();
```

__Post__
```java
Map<String, List<String>> myMap = new HashMap<>();
```

### Type arguments on method invocation parameters
__Pre__
```java
// Requires Java 8
List<GenericSample> result = foo.genericMethod(new ArrayList<GenericSample>(), input);
```

__Post__
```java
// Requires Java 8
List<GenericSample> result = foo.genericMethod(new ArrayList<>(), input);
```

<VersionNotice />

