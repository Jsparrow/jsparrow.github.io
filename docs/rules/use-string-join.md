---
title: Use String Join
ruleId: UseStringJoin
since: 3.15.0
minJavaVersion: 8
remediationCost: 5
    
description:
    Replaces stream Collectors that are used for concatenating values of a collection with StringJoiner.
tags: ["Java 5", "Performance", "String Manipulation"]
---

# Use String Join

[[toc]]

## Properties

<RuleProperties />

## Description

Java 8 introduced String.join which is a convenient method for concatenating String values of `Iterable`s. 
This rule replaces String concatenations performed using [Collectors.joining()](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html#joining-java.lang.CharSequence-) with concatenations using [String.join()](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#join-java.lang.CharSequence-java.lang.Iterable-). 
A performance improvement can be observed with the increase of the number of elements in the Iterable. 

## Benefits

Improves performance and reduces code clutter. 


## Code Changes

### Concatenating without delimiter

__Pre__
```java
String result = values.stream().collect(Collectors.joining());
```

__Post__
```java
String result = String.join("", values);
```

### Concatenating with delimiter
__Pre__
```java
String result = values.stream().collect(Collectors.joining(","));
```

__Post__
```java
String result = String.join(",", values);
```

### Using static imports
__Pre__
```java
String result = values.stream().collect(joining(","));
```

__Post__
```java
String result = String.join(",", values);
```


### Bytecode JDK 1.8 

__Pre__
```java
public void original(List<String> values) {
    String result = values.stream().collect(Collectors.joining(","));
}
```

```
 0 aload_1
 1 invokeinterface #2 <java/util/List.stream> count 1
 6 ldc #3 <,>
 8 invokestatic #4 <java/util/stream/Collectors.joining>
11 invokeinterface #5 <java/util/stream/Stream.collect> count 2
16 checkcast #6 <java/lang/String>
19 astore_2
20 return
```

__Post__
```java
public void transformed(List<String> values) {
    String result = String.join(",", values);
}
```

```
0 ldc #3 <,>
2 aload_1
3 invokestatic #7 <java/lang/String.join>
6 astore_2
7 return
```

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::