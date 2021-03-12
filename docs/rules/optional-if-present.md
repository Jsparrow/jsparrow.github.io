---
title: Use Optional::ifPresent
ruleId: OptionalIfPresent
since: 2.6.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    The usage of  'Optional.get' should be avoided in general because it can potentially throw a NoSuchElementException (it is likely to be deprecated in future releases).  It is often the case that the invocation of 'Optional.get' is wrapped by a condition that uses  'Optional.isPresent'. Such cases can be replaced with the 'Optional.ifPresent(Consumer<? super T> consumer)'.
tags: ["Java 8", "Old Language Constructs", "Lambda"]
---

# Use Optional::ifPresent

## Description

The usage of  `Optional.get` should be avoided in general because it can potentially throw a `NoSuchElementException` (it is likely to be deprecated in future releases).  It is often the case that the invocation of `Optional.get` is wrapped by a condition that uses  `Optional.isPresent`. Such cases can be replaced with the `Optional.ifPresent(Consumer<? super T> consumer)`.

## Benefits

Improves readability and enables the use of higher order functions on `Optional`.


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
public void multipleInitializers_shouldTransform(Optional<String> input) {
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
public void multipleInitializers_shouldTransform(Optional<String> input) {
    input.ifPresent(value -> {
        String second = "";
        System.out.println(value);
        System.out.println(second);
    });
}
```

## Limitations

Can not be applied if the __then__ path of the branch contains a non-effectively final variable or contains unhandled exceptions.

<VersionNotice />


## Properties

<RuleProperties />
