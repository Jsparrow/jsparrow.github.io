---
title: Remove Redundant Type Casts
ruleId: RemoveRedundantTypeCast
since: 3.14.0
minJavaVersion: 1.1
remediationCost: 1
links:
description:
    All method invocations of toString() on a String element are not needed. Applying this rule will remove such method calls.\n\nFor example, '"string".toString()' becomes '"string"'.\n\nThis transformation improves performance. RemoveToStringOnStringRule_name=Remove toString() on String.

tags: ["Java 1.1", "Readability", "Performance"]
---

# Remove Redundant Type Casts

[[toc]]

## Properties

<RuleProperties />


## Description

The rule first searches the next type-cast operation. If the expression is casted to a type which already is exactly the type of the expression, then the type casting prefix is removed. Additionally, also parentheses involved in the cast operation will be removed if they are not necessary any more. This rule regards two types as exactly the same only when both types have also exactly the same generic arguments.

## Benefits

This rule increases readability of code and additionally it improves performance by removing unnecessary cast operations.

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Type cast on string literal

__Pre__
```java
((String)"HelloWorld").charAt(0);
```

__Post__
```java
"HelloWorld".charAt(0);
```


### Type cast on string variable

__Pre__
```java
String helloWorld = "HelloWorld";
((String)helloWorld).charAt(0);
```

__Post__
```java
String helloWorld = "HelloWorld";
helloWorld.charAt(0);
```

### Type cast on List of String

__Pre__
```java
List<String> l = new ArrayList<>();
((List<String>)l).add("value1");
```

__Post__
```java
List<String> l = new ArrayList<>();
l.add("value1");
```

### Type cast combined with removing of unnecessary parentheses

__Pre__
```java
long x = ((((long)((long)((100 + 200L)) + 300))));
```

__Post__
```java
long x = ((100 + 200L)) + 300;
```

### No transformation in connectio with type cast combined with joker types

__Not Transformed__
```java
List<?> l = new ArrayList<>();
((List<?>)l).size();
```

<VersionNotice />

