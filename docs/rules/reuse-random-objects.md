---
title: Reuse Random Objects
ruleId: ReuseRandomObjects
since: 3.20.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S2119"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2119&q=S2119"
    
description:
    .
tags: ["Java 1.1", "Security"]
---

# Reuse Random Objects

[[toc]]

## Properties

<RuleProperties />

## Description

Creating a `new Random()` object each time a random value is needed is inefficient and may produce numbers which are not random. This rule extracts reusable [`java.util.Random`](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html) objects, from local variables to class or instance fields. 
Note that SonarCloud classifies this rule as a Critical Bug, [S2119](https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2119&q=S2119).

## Benefits

Improves the unpredictability and efficiency of the generated random values.

## Code Changes


### Extracting an Instance Field

__Pre__
```java
public void sampleMethod(String value) {
    Random random = new Random();
    int nextIndex = random.nextInt();
    //...
}
```

__Post__
```java
private Random random = new Random();

public void sampleMethod(String value) {
    int nextIndex = random.nextInt();
    //...
}
```

### Extracting a Class Field

__Pre__
```java
public static void sampleMethod(String value) {
    Random random = new Random();
    int nextIndex = random.nextInt();
    //...
}
```

__Post__
```java
private static Random random = new Random();

public static void sampleMethod(String value) {
    int nextIndex = random.nextInt();
    //...
}
```

### Reusing an Existing Field

__Pre__
```java
private Random random = new Random();

public void sampleMethod(String value) {
    Random random = new Random();
    int nextIndex = random.nextInt();
    //...
}
```

__Post__
```java
private Random random = new Random();

public void sampleMethod(String value) {
    int nextIndex = random.nextInt();
    //...
}
```

### Using Secure Random Initializer

__Pre__
```java
public void sampleMethod(String value) {
    Random random = new SecureRandom();
    int nextIndex = random.nextInt();
    //...
}
```

__Post__
```java
private Random random = new SecureRandom();

public void sampleMethod(String value) {
    int nextIndex = random.nextInt();
    //...
}
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::