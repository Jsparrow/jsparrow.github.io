---
title: Remove Redundant Type Casts
ruleId: RemoveRedundantTypeCast
since: 3.15.0
minJavaVersion: 1.1
remediationCost: 1
links:
description:
    A typecast expression can be removed if it casts an expression to a type which is already exactly the type of the expression. Additionally, also parentheses involved in the cast operation will be removed if they are not necessary any more.

tags: ["Java 1.1", "Readability"]
---

# Remove Redundant Type Casts

[[toc]]

## Properties

<RuleProperties />


## Description

The rule first searches the next type-cast operation. If the expression is casted to a type which already is exactly the type of the expression, then the type casting expression is removed. Additionally, also parentheses involved in the cast operation will be removed if they are not necessary any more. This rule regards two types as exactly the same only when both types have also exactly the same generic arguments.

## Benefits

This rule increases readability by removing redundant code.


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

### Type cast combined with unnecessary parentheses

__Pre__
```java
long x = ((((long)((long)((100 + 200L)) + 300))));
```

__Post__
```java
long x = ((100 + 200L)) + 300;
```

## Limitations

### Casting expressions using wild cards
It is not safe to remove type casts containing __wild cards__ (`?`). E.g.:

__Not Transformed__
```java
List<?> l = new ArrayList<>();
((List<?>)l).size();
```

### Casting lambda expressions to Object

Lambda expressions are not subtypes of Object and therefore implicit casting is not possible. E.g.:

__Not Transformed__
```java
Object object = (Supplier<String>) () -> "";
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::