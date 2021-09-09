---
title: Replace String Format by Formatted
ruleId: ReplaceStringFormatByFormatted
since: 4.3.0
minJavaVersion: 15
remediationCost: 2
    
description:
    This rule replaces invocations of the static method `String.format` by invocations of the instance method `String.formatted`.
tags: ["Java 15", "Old Language Constructs", "Readability"]
---

# Replace String Format by Formatted

## Description

Java 15 introduced the new instance method [`formatted​(Object... args)`](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/lang/String.html#formatted(java.lang.Object...)) for [`String`](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/lang/String.html).

This rule replaces invocations of the static method [`String.format​(String format, Object... args)`](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...)) by invocations of the new method described above. This way code is simplified and readability is improved.

::: warning Requirements
* Java 15
:::

## Benefits

Removes code clutter. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Formatted Data about a Person

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

### Using %n for Platform Independent Line Breaks

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

### Formatting a TextBlock

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
