---
title: Use Stream::collect
ruleId: LambdaForEachCollect
since: 2.0.0
minJavaVersion: 8
remediationCost: 15
links:
description:
    Replaces 'Stream::forEach' with 'Stream::collect' if the argument of the 'forEach' statement is only used for adding elements to a list.
    This simplifies adding elements to a list.
tags: ["Java 8", "Lambda", "Loop"]
---

# Use Stream::collect

## Description
Replaces `Stream::forEach` with `Stream::collect` if the argument of the `forEach` statement is only used for adding elements to a list.
This simplifies adding elements to a list.

## Benefits

This rule provides an easier-to read alternative to add items in a list.


## Code Changes

__Pre__
```java
objectList.stream()
    .map(o -> o.substring(0))
    .forEach( oString -> {
         oStrings.add(oString);
     });
```

__Post__
```java
oStrings.addAll(objectList.stream()
    .map(o -> o.substring(0))
    .collect(Collectors.toList()));
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::

## Properties

<RuleProperties />
