---
title: Chain AssertJ AssertThat Statements
ruleId: ChainAssertJAssertThatStatements
since: 4.6.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S5853"
      url: "https://sonarcloud.io/organizations/default/rules?open=java%3AS5853&q=S5853&rule_key=java%3AS5853"
    
description:
    AssertJ assertions carried out on the same object can be chained instead of using multiple assertThat, avoiding duplication and increasing the clarity of the code.
tags: ["Java 8", "Coding Conventions", "Readability"]
---

# Chain AssertJ AssertThat Statements

## Description

AssertJ AssertThat Statements begin with the invocation of one of the oveloaded 'assertThat' methods defined in the class [`org.assertj.core.api.Assertions`](https://javadoc.io/doc/org.assertj/assertj-core/latest/org/assertj/core/api/Assertions.html), followed by assertions on the argument of the 'assertThat'. This rule looks for subsequent AssertJ AssertThat Statements targeting the same object and chains them together. This avoids duplication and increases the clarity of the code.

## Benefits

Applying this rule makes the code more readable.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Example 

__Pre__
```java

```

__Post__
```java

```

### Example 

__Pre__
```java

```

__Post__
```java

```

### Example 

__Pre__
```java

```

__Post__
```java

```

### Example 

__Pre__
```java

```

__Post__
```java

```

### Example 

__Pre__
```java

```

__Post__
```java

```
<VersionNotice />


## Properties

<RuleProperties />
