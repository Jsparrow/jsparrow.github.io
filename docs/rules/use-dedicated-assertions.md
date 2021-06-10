---
title: Use Dedicated Assertions
ruleId: UseDedicatedAssertions
since: 3.31.0
minJavaVersion: 5
remediationCost: 2
links:
    - displayName: "S5785"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5785&q=S5785"
    
description:
    Short rule description (this is shown on the [summary page](https://jsparrow.github.io/rules/#summary)).
tags: ["Java 5", "Testing", "Coding Conventions"]
---

# Use Dedicated Assertions

<RuleProperties />

## Description

This rule looks for JUnit 4 and JUnit Jupiter assertions which can be replaced by more specific ones. 
For example, `assertTrue(a.equals(b))` can be replaced by `assertEquals(a, b)`, `assertTrue(a == b)` can be 
replaced by `assertSame(a, b)` and `assertTrue(a == null)` can be replaced by `assertNull(a)`.

::: warning Requirements
This rule requires one of the following libraries to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits

## Tags

::: tip Tags
<TagLinks />
:::

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

<VersionNotice />

## Properties

<RuleProperties />