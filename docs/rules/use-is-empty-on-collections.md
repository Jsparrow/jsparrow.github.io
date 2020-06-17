---
title: Replace Equality Check with isEmpty()
ruleId: UseIsEmptyOnCollections
since: 2.0.2
minJavaVersion: 6
remediationCost: 2
links:
    - displayName: "S1155"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1155&q=S1155"
    
description:
    This rule replaces comparisons of 'length()' or 'size()' with 0 with a call to 'isEmpty()'. Any occurrences of such a comparison will be replaced, regardless of surrounding control structure.
tags: ["Free", "Java 6", "Old Language Constructs", "Coding Conventions", "Readability"]
---

# Replace Equality Check with isEmpty()

[[toc]]

## Properties

<RuleProperties />


## Description

This rule replaces comparisons of `length()` or `size()` with `0` with a call to `isEmpty()`. Any occurrences of such a comparison will be replaced, regardless of surrounding control structure.

## Benefits

The time complexity of any `isEmpty()` method implementation should be `O(1)` whereas some implementations of `size()` can be `O(n)`. Thus, using this rule provides performance benefits.

## Requirement & Tags

::: warning Requirements
Java 6
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### size, length

__Pre__

```java
Map<String, String> m = new HashMap<>();
if(m.size() == 0);
String s = "";
if(s.length() == 0);
```

__Post__

```java
Map<String, String> m = new HashMap<>();
if(m.isEmpty());
String s = "";
if(s.isEmpty());
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::