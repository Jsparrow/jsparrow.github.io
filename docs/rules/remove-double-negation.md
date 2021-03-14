---
title: Remove Double Negations
ruleId: RemoveDoubleNegation
since: 2.7.0
minJavaVersion: 1.1
remediationCost: 2
links:
    - displayName: "S2761"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2761&q=S2761"
    
description:
    Removes multiple negations from boolean expressions.
tags: ["Free", "Java 1.1", "Coding Conventions"]
---

# Remove Double Negations

## Description

Removes pairs of negations from boolean expressions until only zero or one negation is left.

## Benefits

Improves the readability of the code, by removing cascaded negations of boolean expressions.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Example based on an even number of negations

__Pre__

``` java
boolean a = !!true; // 2 times
```

__Post__

``` java
boolean a = true; // removed negations completely
```

### Example based on an odd number of negations

__Pre__

``` java
boolean a = !!!true; // 3 times
```

__Post__

``` java
boolean a = !true; // reduced to one time
```

<VersionNotice />


## Properties

<RuleProperties />
