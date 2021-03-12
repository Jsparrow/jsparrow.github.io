---
title: Remove Null-Checks Before Instanceof
ruleId: RemoveNullCheckBeforeInstanceof
since: 3.8.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S4201"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS4201&q=S4201"
    
description:
    Finds and removes null-checks before occurrences of instanceof. Since null is not an instance of anything, the null-check is redundant.

tags: ["Free", "Java 1.1", "Readability", "Coding Conventions"]
---

# Remove Null-Checks Before Instanceof

## Description

Finds and removes null-checks before occurrences of `instanceof`. Since `null` is not an instance of anything, the null-check is redundant.

## Benefits

Improves readability by removing redundant code.


## Tags

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


## Properties

<RuleProperties />
