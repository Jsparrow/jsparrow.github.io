---
title: Replace For-Loop with Stream::collect(Collectors.joining())
ruleId: StringBuildingLoop
since: 2.2.0
minJavaVersion: 5
remediationCost: 10
links:
    - displayName: "S1643"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1643&q=S1643"
    
description:
    This rule refactors the enhanced for loops which are only being used for concatenating the elements of collections or arrays.
tags: ["Java 5", "Java 8", "Loop", "Lambda", "Performance"]
---

# Replace For-Loop with Stream::collect(Collectors.joining())

[[toc]]

## Properties

<RuleProperties />


## Description

This rule refactors the enhanced for loops which are only being used for concatenating the elements of collections or arrays.
If the Java level is at least 8, the whole loop is transformed into a stream and `Stream::collect(Collector)` is used for computing the result.
If the Java level is below 8 and at least 5, then a `StringBuilder` is used instead of the direct concatenation of strings in the loop body.

## Benefits
Strings are immutable objects, so concatenation doesn't simply add the new String to the end of the existing string.
Instead, in each loop iteration, the first String is converted to an intermediate object type, the second string is appended, and then the intermediate object is converted back to a String.
Performing these operations degrades the longer the String is. Using a `StringBuilder` instead increases performance.

## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### At least Java 8

__Pre__
```java
List<String> collectionOfStrings = generateStringList(input);
String result = "";
for(String val : collectionOfStrings) {
    result = result + val;
}
```

__Post__
```java
List<String> collectionOfStrings = generateStringList(input);
String result = collectionOfStrings.stream().collect(Collectors.joining());
```

### Below Java 8

__Pre__
```java
List<String> collectionOfStrings = generateStringList(input);
String result = "";
for(String val : collectionOfStrings) {
    result = result + val;
}
```

__Post__
```java
List<String> collectionOfStrings = generateStringList(input);
StringBuilder resultSb = new StringBuilder();
for(String val : collectionOfStrings) {
    resultSb.append(val);
}
String result = resultSb.toString();
```

<VersionNotice />

