---
title: Replace For-Loop with Iterable::forEach
ruleId: EnhancedForLoopToStreamForEach
since: 2.0.0
minJavaVersion: 8
remediationCost: 15
links:
description:
    This rule replaces enhanced for loops (for-each-loops) with an invocation of 'java.lang.Iterable::forEach' method and passes the body of the for-loop as a lambda Consumer parameter.
tags: ["Java 8", "Lambda", "Loop", "Marker"]
defaultConfiguration: true
---

# Replace For-Loop with Iterable::forEach

## Description

This rule replaces enhanced for loops (for-each-loops) with an invocation of `java.lang.Iterable::forEach`-method and passes the body of the for-loop as a lambda `Consumer` parameter.

There are some special cases, in which the transformation won't be possible due to restrictions of lambda expressions and the Consumer interface.

## Benefits

Using functional coding style instead of imperative loops improves the readability and makes the code more compact.


## Tags

::: tip Tags
<TagLinks />
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
for (String value : values) {
    int length = value.length();
    if (length > 2) {
        length /= 2;
    }
    print(value.substring(0, length));
}
```

__Post__
```java
stringList.forEach(value -> {
    int length = value.length();
    if (length > 2) {
        length /= 2;
    }
    print(value.substring(0, length));
});
```

<VersionNotice />


## Properties

<RuleProperties />
