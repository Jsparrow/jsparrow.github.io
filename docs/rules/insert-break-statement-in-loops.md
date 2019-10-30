---
title: Insert Break Statements in For-loops
description:
    Finds the Enhanced For-loops whose sole purpose is to compute a boolean value without causing side effects and inserts a break statement immediately after the boolean value is computed. Thus, eliminating redundant loop iterations.

tags: ["Java 1.5", "Loop", "Performance"]
---

# Insert Break Statements in For-loops

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [3.9.0](/eclipse/release-notes.html#_3-9-0) |
| Minimum Java version            | 1.5   |
| Remediation cost                | 2 min |

## Description

Finds the Enhanced For-loops whose sole purpose is to compute a boolean value without causing side effects and inserts a break statement immediately after the boolean value is computed. 
Thus, eliminating redundant loop iterations.

## Benefits

Improves performance by eliminating redundant cycles in Enhanced For-loops. 

## Requirement & Tags

::: warning Requirements
Java 1.5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Searching for a fixed value

__Pre__
```java
    boolean found = false;
    for(String value : values) {
        if(value.equals("John")) {
            found = true;
        }
    }
```

__Post__
```java
		boolean found = false;
		for(String value : values) {
			if(value.equals("John")) {
				found = true;
                break;
			}
		}
```

### Matching a value in another Collection

__Pre__
```java
    boolean found = false;
    for(String value : values) {
        if(collection.contains(value)) {
            found = true;
        }
    }
```

__Post__
```java
    boolean found = false;
    for(String value : values) {
        if(collection.contains(value)) {
            found = true;
            break;
        }
    }
```


###  Wrapping body into a code block

__Pre__
```java
    boolean empty = false;
    for(String value : values)
        if(value.isEmpty()) 
            empty = true;
```

__Post__
```java
    boolean empty = false;
    for(String value : values)
        if(value.isEmpty()) {
            empty = true;
            break;
        }
```

## Limitations

This rule cannot be applied if the method invocations occurring in the if condition might cause side effects in the program execution. 

__Pre__
```java
    boolean found = false;
    for(String value : values) {
        if(consumeValue(value)) {
            found = true;
        }
    }
```