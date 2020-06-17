---
title: Replace For-Loop with Stream::findFirst
ruleId: EnhancedForLoopToStreamFindFirst
since: 2.2.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    Replaces enhanced for-loops which are used to find an element within a collection by a stream and uses 'Stream::findFirst' to find the result.
    By using the stream syntax, a multi-line control statement can be reduced to a single line.
tags: ["Java 8", "Lambda", "Loop"]
---

# Replace For-Loop with Stream::findFirst

[[toc]]

## Properties

<RuleProperties />


## Description

Replaces enhanced for-loops which are used to find an element within a collection by a stream and uses `Stream::findFirst` to find the result.
By using the stream syntax, a multi-line control statement can be reduced to a single line.

## Benefits

Applying this rule results in better readability.


## Code Changes

### Loop with break statement

__Pre__
```java
String key = "";
List<String> values = generateList(input);
for(String value : values) {
    if(value.length() > 4) {
         key = value;
         break;
    }
}
```

__Post__
```java
List<String> values = generateList(input);
String key = values.stream()
    .filter(value -> value.length() > 4)
    .findFirst()
    .orElse("");
```

### Loop with return statement

__Pre__
```java
for(String value : values) {
    if(value.length() > 4) {
        return value;
    }
}  
return "";
```

__Post__
```java
return values.stream()
    .filter(value -> value.length() > 4)
    .findFirst()
    .orElse("");
```

### Implicit casting

__Pre__
```java
double defaultValue = -1.0;
double defaultIndex = defaultValue;
List<Integer> values = new ArrayList<>();
for(int value : values) {
    if(value > 4) {
        defaultIndex = value;
        break;
    }
}
```

__Post__
```java
double defaultValue = -1.0;
List<Integer> values = new ArrayList<>();
double defaultIndex = values.stream()
    .filter(value -> value > 4)
    .findFirst()
    .map(Double::valueOf)
    .orElse(defaultValue);
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::