---
title: Replace For-Loop with Stream::anyMatch
description:
    Replaces occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with `Stream::anyMatch`. 
    The stream syntax is more concise and improves readability.
---

# Replace For-Loop with Stream::anyMatch

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 2.1.1 |
| Minimum Java version            | 8     |
| Remediation cost                | 2 min |
| Links                           |       |

## Description

Replaces occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with `Stream::anyMatch`. 
The stream syntax is more concise and improves readability.

## Benefits
Applying this rule results in better readability.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Lambda, Loop
:::

## Code Changes

### Loop with `break` statement
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