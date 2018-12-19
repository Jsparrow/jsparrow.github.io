---
title: Replace For-Loop with Stream::forEach
description:
    This rule replaces enhanced for loops (for-each-loops) with an invocation of `java.util.stream.Stream::forEach`-method and passes the body of the for-loop as a lambda `Consumer` parameter.
tags: ["rule"]
---

# Replace For-Loop with Stream::forEach

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 15 min |
| Links                           |       |

## Description

This rule replaces enhanced for loops (for-each-loops) with an invocation of `java.util.stream.Stream::forEach`-method and passes the body of the for-loop as a lambda `Consumer` parameter.

There are some special cases, in which the transformation won't be possible due to restrictions of lambda expressions and the Consumer interface.

## Benefits

Using streams instead of loops improves the readability and makes the code more compact.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Lambda, Loop
:::

## Code Changes

### Single statement in loop body
__Pre__
```java
for (String string : stringList) {
    System.out.println(string);
}
```

__Post__
```java
stringList.forEach(s -> System.out.println(s));
```
### Multiple statements in loop body

__Pre__
```java
for (String s : stringList1) {
    int length = 0;
    if (s.length() < 2) {
        length /= s.length();
    }
}
```

__Post__
```java
stringList1.forEach(s -> {
    int length = 0;
    if (s.length() < 2) {
        length /= s.length();
    }
});
```
