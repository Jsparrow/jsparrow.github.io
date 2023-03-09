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
    This rule avoids creating intermediate 'String' instances by making use of the overloaded offset based methods in the String API.
    
tags: ["Free", "Java 1.1",  "String Manipulation", "Performance", "Marker"]
---

# Use Offset Based String Methods

## Description

This rule avoids creating intermediate `String` instances by making use of the overloaded offset based methods in the String API. For example, if [`substring(beginIndex)`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#substring-int-) is followed by [`startsWith(aString)`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#startsWith-java.lang.String-), then both invocations are removed and [`startsWith(aString, beginIndex)`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#startsWith-java.lang.String-int-) is used instead.

## Benefits

Reduces the number of String objects whose sole purpose is to indicate an offset.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Using String startsWith

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

### Using String indexOf

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

### Using String lastIndexOf

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
## Properties

<RuleProperties />
