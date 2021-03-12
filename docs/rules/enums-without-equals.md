---
title: Replace equals() on Enum Constants
ruleId: EnumsWithoutEquals
since: 2.2.0
minJavaVersion: 5
remediationCost: 5
links:
    - displayName: "S4551"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS4551&q=S4551"
description:
    Replaces occurrences of 'equals()' on Enum constants with an identity comparison (==).
    In the case the equals relation is wrapped with an boolean negation the result will be an not equals (!=).
tags: ["Free", "Java 5", "Coding Conventions"]
---

# Replace equals() on Enum Constants

## Description

Replaces occurrences of `equals()` on Enum constants with an identity comparison (`==`).
In the case the equals relation is wrapped with an boolean negation the result will be an not equals (`!=`).

## Benefits

Technically, equals and `==` are the same. `==` however is null safe and thus can help avoid programming errors.


## Code Changes

### Enum in right-hand-side
__Pre__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return roundingMode.equals(RoundingMode.UP);
}
```

__Post__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return roundingMode == RoundingMode.UP;
}
```

### Enum in left-hand-side
__Pre__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return RoundingMode.UP.equals(roundingMode);
}
```

__Post__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return RoundingMode.UP == roundingMode;
}
```

### Enum in infix expression
__Pre__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return !RoundingMode.UP.equals(roundingMode);
}
```

__Post__
```java
public boolean isRoundUp(RoundingMode roundingMode) {
    return !(RoundingMode.UP == roundingMode);
}
```

<VersionNotice />


## Properties

<RuleProperties />
