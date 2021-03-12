---
title: Replace Concatenation with Infix-Operation
ruleId: StringConcatToPlus
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 5
links:
description:
    This rule replaces the 'concat()' method on 'Strings' with the + operator.
tags: ["Java 1.1", "String Manipulation", "Performance"]
---

# Replace Concatenation with Infix-Operation

## Description

This rule replaces the `concat()` method on `String`s with the `+` operator.

For example, `s = s.concat("bar")` becomes `s = s + "bar"`. This improves readability and performance for
 chained concatenations.

## Benefits

Applying this rule has slight performance benefits and arguably improves readability.
The Java compiler will convert the `+` operation to use a `StringBuilder`.
The more concatenations occur, the bigger the performance gain is.


## Code Changes

### Base case
__Pre__
```java
String s = "foo";
s = s.concat("bar");
```

__Post__
```java
String s = "foo";
s = s + "bar";
```

### Chained concatenation expression
__Pre__
```java
input.concat("abc").concat("cde").concat("fgh".concat("hij"));
```

__Post__
```java
input + "abc" + "cde" + "fgh" + "hij";
```

### Nested concatenation expressions

__Pre__
```java
input.concat(param.concat(param));
```

__Post__
```java
input + param + param;
```

### Bytecode JDK 1.8 

__Pre__
```java
public void original() {
    String value = "foo".concat("bar");
}
```

```
0 ldc #2 <foo>
2 ldc #3 <bar>
4 invokevirtual #4 <java/lang/String.concat>
7 astore_1
8 return
```

__Post__
```java
public void transformed() {
    String value = "foo" + "bar";
}
```

```
0 ldc #5 <foobar>
2 astore_1
3 return
```

<VersionNotice />


## Properties

<RuleProperties />
