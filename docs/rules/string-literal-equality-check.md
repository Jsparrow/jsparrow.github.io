---
title: Reorder String Equality Check
ruleId: StringLiteralEqualityCheck
since: 2.0.0
minJavaVersion: 1.1
remediationCost: 10
links:
    - displayName: "S1132"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1132&q=S1132"
    
description:
    Moves the string literals in the left-hand-side of 'equals()' or 'equalsIgnoreCase()' when checking for equality.
tags: ["Free", "Java 1.1", "String Manipulation"]
---

# Reorder String Equality Check

## Description

To avoid NullPointerExceptions , it is recommended to put string literals in the left-hand-side of `equals()` or `equalsIgnoreCase()` when checking for equality.

## Benefits

This order prevents NullPointerExceptions from being raised, as a string literal can never be `null` by definition, and therefore makes the code less prone to errors. An example can be seen below.


## Code Changes

__Pre__

```java
getClass().getName().equals("Foo");
```

__Post__
```java
"Foo".equals(getClass().getName());
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::