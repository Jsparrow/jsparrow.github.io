---
title: Use Stream::filter
ruleId: LambdaForEachIfWrapperToFilter
since: 2.0.0
minJavaVersion: 8
remediationCost: 5
links:
description:
    This rule transforms an if-Statement (without an else statement), which wraps the whole execution block of a 'Stream::forEach' method into a call to 'Stream::filter' with a lambda expression (Predicate) as parameter. This lambda is constructed using the expression from the if-Statement.
tags: ["Java 8", "Lambda", "Loop"]
defaultConfiguration: true
---

# Use Stream::filter

[[toc]]

## Properties

<RuleProperties />


## Description

This rule transforms an if-Statement (without an else statement), which wraps the whole execution block of a `Stream::forEach` method into a call to `Stream::filter` with a lambda expression (Predicate) as parameter. This lambda is constructed using the expression from the if-Statement.

## Benefits

This rule provides an easier-to read alternative to filter items in a list.


## Code Changes

__Pre__

```java
List<String> list = Arrays.asList("foo", "bar");
list.stream().forEach(s -> {
    if (s.length() > 3) {
        System.out.println(s);
        System.out.println(s + s);
    }
});
```

__Post__

```java
List<String> list = Arrays.asList("foo", "bar");
list.stream().filter((s)-> s.length() > 3).forEach((s)-> {
            System.out.println(s);
            System.out.println(s + s);
});
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::