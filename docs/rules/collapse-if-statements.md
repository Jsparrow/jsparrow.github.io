---
title: Collapse If Statements
ruleId: CollapseIfStatements
since: 3.2.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S1066"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1066&q=S1066"
    
description:
    Collapses, when possible, the nested if-statements into a single one by concatenating the conditions with the infix operator &&.
    
tags: ["Free", "Java 1.1", "Coding Conventions", "Readability"]
---

# Collapse If Statements

[[toc]]

## Properties

<RuleProperties />


## Description

Collapses, when possible, the nested if-statements into a single one by concatenating their conditions with the infix operator `&&`. 
If the concatenation results to an infix expression with more than two components, then a new local variable is introduced to store the condition.


## Benefits

Improves the readability by reducing the number of the nested language constructs. 


## Code Changes

### Simple collapse
__Pre__
```java
    if (a) {
        if (b) {
            System.out.println("Ok");
        }
    }
```
__Post__
```java
    if (a && b) {
        System.out.println("Ok");
    }
```

#### Collapsing more than two statements
__Pre__
```java
    if (a) {
        if (b) {
            if (c) {					
                System.out.println("Ok");
            }
        }
    }
```
__Post__
```java
    boolean condition = a && b && c;
    if (condition) {
        System.out.println("Ok");
    }
```

#### Compound conditions
__Pre__
```java
    if (a) {
        if (b || c) {					
            System.out.println("Ok");
        }
    }
```
__Post__
```java
    boolean condition = a && (b || c);
    if (condition) {
        System.out.println("Ok");
    }
```
<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::