---
title: Use Optional::ifPresent
description:
    The usage of  Optional.get should be avoided in general because it can potentially throw a NoSuchElementException (it is likely to be deprecated in future releases).  It is often the case that the invocation of Optional.get is wrapped by a condition that uses  Optional.isPresent. Such cases can be replaced with the Optional.ifPresent(Consumer<? super T> consumer).
tags: ["rule"]
---

# Use Optional::ifPresent

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.6.0](/eclipse/release-notes.html#_2-6-0) |
| Minimum Java version            | 8 |
| Remediation cost                | 2 min |
| Links                           | [S3655](https://sonarcloud.io/organizations/default/rules?open=squid%3AS3655&rule_key=squid%3AS3655)|

## Description

The usage of  Optional.get should be avoided in general because it can potentially throw a NoSuchElementException (it is likely to be deprecated in future releases).  It is often the case that the invocation of Optional.get is wrapped by a condition that uses  Optional.isPresent. Such cases can be replaced with the Optional.ifPresent(Consumer<? super T> consumer).

## Benefits

Reduces the risk of raising a NoSuchElementException at runtime.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Old Language Constructs, Lambda
:::

## Code Changes

### Default

__Pre__

```java
public void defaultUseCase_shouldTransform(Optional<String> input) {
    if (input.isPresent()) {
        String value = input.get();
        System.out.println(value);
    }
}
```

__Post__

```java
public void defaultUseCase_shouldTransform(Optional<String> input) {
    input.ifPresent(value -> System.out.println(value));
}
```

### Multiple initializes in the row

__Pre__

```java
String value = "prefix" + "value" + "suffix";
public void multipleInitialiyers_shouldTransform(Optional<String> input) {
    if (input.isPresent()) {
        String value = input.get(), second = "";
        System.out.println(value);
        System.out.println(second);
    }
}
```

__Post__

```java
String value = "prefix" + "value" + "suffix";
public void multipleInitialiyers_shouldTransform(Optional<String> input) {
    input.ifPresent(value -> {
        String second = "";
        System.out.println(value);
        System.out.println(second);
    });
}
```

## Limitations

Can not be applied if the __than__ path of the branch contains a non-effectively final variable or contains unhandled exceptions.
