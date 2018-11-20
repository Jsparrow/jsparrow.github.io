---
title: Replace Assignment with Compound Operator
description:
    Simplifies arithmetic operations that an compound operator where possible.
---

# Add Parenthesis to Control Statements

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9   |
| Minimum Java version            | 1.4   |
| Remediation cost                | 2 min |
| Links                           |  |

## Description

Assignments involving an arithmetic assignment can be simplified by using a compound operator such as '+=', '-=', '/=' or '*='. 
For example, this rule will transform 'a=a+1' into 'a+=1'.  
The rule only applies if both operands are primitive types.  

## Benefits

Applying this rule leads to more simplicity in the code base and thus improves readability.  

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.4, Readability, Coding Conventions
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
* int
* double
* float
* long
* short
