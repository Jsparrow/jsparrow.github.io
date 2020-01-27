---
title: Replace Assignment with Compound Operator
ruleId: ArithmethicAssignment
since: 1.0.0
minJavaVersion: 1.4
remediationCost: 2
links:
description:
    Simplifies arithmetic operations that an compound operator where possible.
tags: ["Java 1.4", "Readability", "Coding Conventions"]
---

# Replace Assignment with Compound Operator

[[toc]]

## Properties

<RuleProperties />


## Description

Assignments involving an arithmetic assignment can be simplified by using a compound operator such as `+=`, `-=`, `/=` or `*=`.
For example, this rule will transform `a=a+1` into `a+=1`.  
The rule only applies if both operands are primitive types.  

## Benefits

Applying this rule leads to more simplicity in the code base and thus improves readability.  

## Requirement & Tags

::: warning Requirements
Java 1.4
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Operator +=

__Pre__

``` java
i = i + 3;
i = 3 + i;
i = i + (3 + 4);
```

__Post__

``` java
i += 3;
i += 3;
i += (3 + 4);
```

### Operator -=

__Pre__

``` java
i = i - 3;
i = -3 + i;
i = i - (3 + 4);
```
__Post__

``` java
i -= 3;
i += -3;
i -= (3 + 4);
```
### Operator *=

__Pre__

``` java
i = i * 3;
i = i * (3 + 4);
```
__Post__

``` java
i *= 3;
i *= (3 + 4);
```

### Operator /=

__Pre__

``` java
i = i / 3;
i = i / (3 + 4);
```
__Post__

``` java
i /= 3;
i /= (3 + 4);
```

## Limitations

Rule can be applied only on the following types:
* `int`
* `double`
* `float`
* `long`
* `short`

<VersionNotice />

