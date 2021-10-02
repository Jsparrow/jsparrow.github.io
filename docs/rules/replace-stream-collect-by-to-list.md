---
title: Replace Stream Collect By ToList
ruleId: ReplaceStreamCollectByToList
since: 4.4.0
minJavaVersion: 16
remediationCost: 2
    
description:
    Java 16 introduced Stream.toList() for simplifying the conversion of a stream into a list. For example, stream.collect(Collectors.toUnmodifiableList()) can be transformed to stream.toList().
tags: ["Java 16", "Old Language Constructs", "Readability"]
---

# Replace Stream Collect By ToList

## Description

Java 16 introduced a new instance method [`Stream.toList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Stream.html#toList()) to format a string with the supplied arguments. 

This rule replaces invocations of [`Stream.collect​(Collector)`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Stream.html#collect(java.util.stream.Collector)) by invocations of the new method described above if the argument passed to the `collect` invocation is a list collector retrieved by the invocation of [`Collectors.toList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Collectors.html#toList()) or [`Collectors.toUnmodifiableList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Collectors.html#toUnmodifiableList())
Thus, simplifying the code and improving the readability.

::: warning Requirements
* Java 16
:::

## Benefits

Removes code clutter. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Invoking `formatted`

__Pre__
```java
String output = String.format(
    "Name: %s, Phone: %s, Address: %s, Salary: $%.2f",
    name, phone, address, salary);
```

__Post__
```java
String output = "Name: %s, Phone: %s, Address: %s, Salary: $%.2f"
                .formatted(name, phone, address, salary);
```

### Platform Independent Line Breaks

__Pre__
```java
String output = String.format(
    "Name: %s %s%nAddress: %s%nPhone: %s",
    firstName, lastName, address, phone);
```

__Post__
```java
String output = "Name: %s %s%nAddress: %s%nPhone: %s"
                .formatted(firstName, lastName, address, phone);
```

### Formatted Text Block

__Pre__
```java
String output = String.format("""
		Name:    %s
		Phone:   %s
		Address: %s
		Salary:  $%.2f
		""", 
        name, phone, address, salary);
```

__Post__
```java
String output = """
		Name:    %s
		Phone:   %s
		Address: %s
		Salary:  $%.2f
		""".formatted(name, phone, address, salary);
```

<VersionNotice />

## Properties

<RuleProperties />
