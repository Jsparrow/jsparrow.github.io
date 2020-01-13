---
title: Remove Null-Checks Before Instanceof
ruleId: RemoveNullCheckBeforeInstanceof
since: 3.8.0
minJavaVersion: 1.1
remediationCost: 5
links: "[S4201](https://sonarcloud.io/organizations/default/rules?open=squid%3AS4201&rule_key=squid%3AS4201)"
description:
    Finds and removes null-checks before occurrences of instanceof. Since null is not an instance of anything, the null-check is redundant.

tags: ["Java 1.1", "Readability", "Coding Conventions"]
---

# Remove Null-Checks Before Instanceof

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [3.8.0](/eclipse/release-notes.html#_3-8-0) |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           | [S4201](https://sonarcloud.io/organizations/default/rules?open=squid%3AS4201&rule_key=squid%3AS4201) |

## Description

Finds and removes null-checks before occurrences of `instanceof`. Since `null` is not an instance of anything, the null-check is redundant.

## Benefits

Improves readability by removing redundant code.

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Null-check in conjunction with instanceof
__Pre__
```java
boolean isUser = x != null && x instanceof User;
```

__Post__
```java
boolean isUser = x instanceof User;
```

### Null-check in disjunction with instanceof
__Pre__
```java
boolean isNotUser = y == null || !(y instanceof User);
```

__Post__
```java
boolean isNotUser = !(y instanceof User);
```

### Conjunction in if statement 

__Pre__
```java
if(x != null && x instanceof User) {
    repository.save((User)x);
}
```

__Post__
```java
if(x instanceof User) {
    repository.save((User)x);
}
```



<VersionNotice />

