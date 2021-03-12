---
title: Insert Break Statements in For-loops
ruleId: InsertBreakStatementInLoops
since: 3.9.0
minJavaVersion: 5
remediationCost: 2
links:
description:
    Finds the Enhanced For-loops whose sole purpose is to compute a boolean value without causing side effects and inserts a break statement immediately after the boolean value is computed. Thus, eliminating redundant loop iterations.

tags: ["Java 5", "Loop", "Performance"]
---

# Insert Break Statements in For-loops

## Description

Finds the Enhanced For-loops whose sole purpose is to compute a boolean value without causing side effects and inserts a break statement immediately after the boolean value is computed. 
Thus, eliminating redundant loop iterations.

## Benefits

Improves performance by eliminating redundant cycles in Enhanced For-loops. 


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

<VersionNotice />
## Properties

<RuleProperties />
