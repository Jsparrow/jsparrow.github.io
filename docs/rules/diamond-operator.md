---
title: Remove Explicit Type Argument
ruleId: DiamondOperator
since: 1.0.0
minJavaVersion: 7
remediationCost: 1
links:
    - displayName: "S2293"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2293&q=S2293"
    
description:
    Since Java 1.7 the Diamond Operator (<>) can be used to simplify instance creation where generics are involved.
tags: ["Java 7", "Readability"]
defaultConfiguration: true
---

# Remove Explicit Type Argument

## Description

Since Java 7 the [Diamond Operator](https://docs.oracle.com/javase/7/docs/technotes/guides/language/type-inference-generic-instance-creation.html) (`<>`) can be used to simplify instance creation where generics are involved.

## Benefits

Applying this rule reduces clutter and improves readability.


## Code Changes

### Type arguments on new instance creations
__Pre__
```java
Map<String, List<String>> myMap = new HashMap<String, List<String>>();
```

__Post__
```java
Map<String, List<String>> myMap = new HashMap<>();
```

### Type arguments on method invocation parameters
__Pre__
```java
// Requires Java 8
List<GenericSample> result = foo.genericMethod(new ArrayList<GenericSample>(), input);
```

__Post__
```java
// Requires Java 8
List<GenericSample> result = foo.genericMethod(new ArrayList<>(), input);
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::