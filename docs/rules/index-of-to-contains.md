---
title: Replace indexOf() with contains()
ruleId: IndexOfToContains
since: 2.2.0
minJavaVersion: 5
remediationCost: 2
links:
description:
    This rule replaces calls to 'indexOf()' on instances of Strings or Collections with calls to the 'contains()' method.
    'contains()' was introduced in Java 1.4 and helps to make the code more readable.
tags: ["Java 5", "Old Language Constructs", "Readability"]
---

# Replace indexOf() with contains()

[[toc]]

## Properties

<RuleProperties />


## Description

This rule replaces calls to indexOf() on instances of `String`s or `Collection`s with calls to the `contains()` method.
`contains()` was introduced in Java 1.4 and helps to make the code more readable.

## Benefits

Most checks against an indexOf value compare it with `-1` because `0` is a valid index.
Any checks which look for values `>0` ignore the first element, which is likely a bug.
If the intent is merely to check inclusion of a value in a `String` or a List, the contains method is better suited to express this intent.
Clearer intent means better readability.

## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Replacing `indexOf()` by `!contains()` on String
__Pre__
```java
String hello = "Hello World";
if (hello.indexOf("ello") == -1) {
    println(hello);
}
```

__Post__
```java
String hello = "Hello World";
if (!hello.contains("ello")) {
    println(hello);
}
```

### Replacing `indexOf()` by `contains()` on String
__Pre__
```java
String hello = "Hello World";
if (hello.indexOf("ello") >= 0) {
    println(hello);
}
```

__Post__
```java
String hello = "Hello World";
if (hello.contains("ello")) {
    println(hello);
}
```

### Replacing `indexOf()` by `!contains()` on Collection
__Pre__
```java
if (0 > list.indexOf(string)) {
    list.add(string);
}
```

__Post__
```java
if (!list.contains(string)) {
    list.add(string);
}
```

### Replacing `indexOf()` by `contains()` on Collection
__Pre__
```java
if (list.indexOf(string) >= 0) {
    list.add(string);
}
```

__Post__
```java
if (list.contains(string)) {
    list.add(string);
}
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::