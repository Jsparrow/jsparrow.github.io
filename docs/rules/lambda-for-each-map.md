---
title: Use Stream::map
ruleId: LambdaForEachMap
since: 2.0.0
minJavaVersion: 8
remediationCost: 15
links:
description:
    Extracts a block from the body of the consumer of the 'Stream::forEach' method and introduces 'Stream::map' instead.
    This makes complicated code blocks easier to read and reuse.
tags: ["Java 8", "Lambda", "Loop", "Marker"]
---

# Use Stream::map

## Description

Extracts a block from the body of the consumer of the `Stream::forEach` method and introduces `Stream::map` instead.
This makes complicated code blocks easier to read and reuse.

## Benefits
Arguably the lambda expression is easier to read and can be combined with other stream operations.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Unwrapping single statement

__Pre__
```java
list.stream()
    .filter(s -> !s.isEmpty())
    .forEach(s -> {
        String subString = s.substring(1);
        sb.append(subString);
    });
```

__Post__
```java
list.stream()
    .filter(s -> !s.isEmpty())
    .map(s -> s.substring(1))
    .forEach(subString -> sb.append(subString));
```

<VersionNotice />


## Properties

<RuleProperties />
