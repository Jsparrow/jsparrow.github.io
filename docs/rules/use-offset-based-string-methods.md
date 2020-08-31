---
title: Use Offset Based String Methods
ruleId: UseOffsetBasedStringMethods
since: 3.21.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S4635"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS4635&q=S4635"
    
description:
    This rule avoids creating intermediate String instancess by making use of overloaded offset based methods in the String API.
    
tags: ["Java 1.1",  "String Manipulation", "Performance"]
---

# Use Offset Based String Methods

[[toc]]

## Properties

<RuleProperties />

## Description

This rule avoids creating intermediate String instancess by making use of overloaded offset based methods in the String API. For example, if [`substring(beginIndex)`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#substring-int-) is followed by [`indexOf(aString)`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#indexOf-java.lang.String-), the substring invocation is eliminated and [`indexOf(aString, beginIndex)`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#indexOf-java.lang.String-int-) is used instead.

## Benefits

Reduces the number of String objects whose sole purpose is to indicate an offset.


## Code Changes

### Using String starts with

__Pre__
```java
	String str = "Hello World!";
	boolean startsWith = str.substring(6).startsWith("World");
```

__Post__
```java
	String str = "Hello World!";
	boolean startsWith = str.startsWith("World", 6);
```

### Using String index of

__Pre__
```java
	String str = "Hello World!";
	int index = str.substring(6).indexOf("d");
```

__Post__
```java
	String str = "Hello World!";
	int index = Math.max(str.indexOf("d", 6) - 6, -1);
```

### Using String last index of

__Pre__
```java
	String str = "Hello World!";
	int index = str.substring(6).lastIndexOf("d");
```

__Post__
```java
	String str = "Hello World!";
	int index = Math.max(str.lastIndexOf("d", 6) - 6, -1);
```


<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::