---
title: Replace For-Loop with Stream::Match
ruleId: EnhancedForLoopToStreamAnyMatch
since: 2.2.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    Replaces occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with 'Stream::anyMatch', 'Stream::allMatch' or 'Stream::noneMatch'.
    The stream syntax is more concise and improves readability.
tags: ["Java 8", "Lambda", "Loop"]
---

# Replace For-Loop with Stream::Match

[[toc]]

## Properties

<RuleProperties />


## Description

Replaces occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with `Stream::anyMatch`, `Stream::allMatch` or `Stream::noneMatch`.
The stream syntax is more concise and improves readability.

## Benefits
Applying this rule results in better readability.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Loop with `break` statement to `Stream::anyMatch`
__Pre__
```java
boolean containsEmpty = false;
for(String value : strings) {
    if(value.isEmpty()) {
        containsEmpty = true;
        break;
    }
}
```

__Post__
```java
boolean containsEmpty = strings.stream().anyMatch(value -> value.isEmpty());
```

### Loop with `break` statement to `Stream::noneMatch`
__Pre__
```java
boolean noneEmpty = true;
for(String value : strings) {
    if(value.isEmpty()) {
        noneEmpty = false;
        break;
    }
}
```

__Post__
```java
boolean noneEmpty = strings.stream().noneMatch(value -> value.isEmpty());
```

### Loop with `break` statement to `Stream::allMatch`
__Pre__
```java
boolean allEmpty = true;
for(String value : strings) {
    if(!value.isEmpty()) {
        containsEmpty = false;
        break;
    }
}
```

__Post__
```java
boolean allEmpty = strings.stream().allMatch(value -> value.isEmpty());
```


### Loop with `return` statement
__Pre__
```java
for(String value : strings) {
    if(emptyString.equals(value)) {
        return true;
    }
}
return false
```

__Post__
```java
return strings.stream().anyMatch(value -> emptyString.equals(value));
```

<VersionNotice />

