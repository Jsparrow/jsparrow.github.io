---
title: Replace JUnit Expected Annotation Property with assertThrows
ruleId: ReplaceExpectedAnnotationProperty
since: 3.24.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S5777"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5777&q=S5777"
    
description:
    This rule aims to replace @Test(expected=...) annotation property with 'assertThrows' introduced in JUnit 4.13.
tags: ["Java 8", "Testing", "Lambda", "Readability"]
---

# Replace JUnit Expected Annotation Property with assertThrows

[[toc]]

## Properties

<RuleProperties />

## Description

Using 'expected' annotation property for testing the thrown exceptions is rather misleading. 
Often it becomes unclear which part of the code in the test case is responsible for throwing the exception. 
This rule aims to overcome this problem by replacing the 'expected' annotation property with 'assertThrows' introduced in JUnit 4.13.

::: warning Requirements
This rule works on the following types and implementations of them:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-engine:5.0.0
:::

## Benefits


## Code Changes


### Case description

__Pre__
```java
sampleCode();
```

__Post__
```java
sampleCode();
```

## Limitations

* Expected Runtime exceptions are not supported unless it can be explicitly derived that the last statements throws the expected exception. 

```java
@Test(expected=NullPointerException.class)
public void expectingRuntimeException() {
    User user = userRepository.findById("10");
    setName("John")
    save(user);
    throwRuntimeException();
}
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::