---
title: Remove Double Negations
ruleId: RemoveDoubleNegation
since: 2.7.0
minJavaVersion: 1.1
remediationCost: 2
links:
    - displayName: "S2761"
      url: "https://sonarcloud.io/organizations/default/rules?open=squid%3AS2761&rule_key=squid%3AS2761"
    
description:
    Removes multiple negations from boolean expressions.
tags: ["Free", "Java 1.1", "Coding Conventions"]
---

# Remove Double Negations

[[TOC]]

## Properties

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | [2.7.0](/eclipse/release-notes.html#_2-7-0) |
| Minimum Java version            | 1.1   |
| Remediation cost                | 2 min |
| Links                           | [S2761](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2761&rule_key=squid%3AS2761) |

## Description

Removes pairs of negations from boolean expressions until only zero or one negation is left.

## Benefits

Improves the readability of the code, by removing cascaded negations of boolean expressions.

## Requirement & Tags

::: warning Requirements
None.
:::

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

