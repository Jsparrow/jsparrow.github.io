---
title: Reorder Modifiers
ruleId: ReorderModifiers
since: 3.6.0
minJavaVersion: 1.1
remediationCost: 2
links:
    - displayName: "S1124"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1124&q=S1124"
    
description:
    This rule reorders the modifiers on Type, Field and Method declarations.

tags: ["Java 1.1", "Coding Conventions", "Readability"]
---

# Reorder Modifiers

[[toc]]

## Properties

<RuleProperties />


## Description

This rule reorders the modifiers on Type, Field and Method Declarations in the following priority: 

* ```public```
* ```protected```
* ```private```
* ```abstract```
* ```default```
* ```static```
* ```final```
* ```transient```
* ```volatile```
* ```synchronized```
* ```native```
* ```strictfp```

## Benefits

Improves the readability by unifying the order of modifiers in Type, Field and Method declarations. 

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Field Declarations 
__Pre__
```java
final static public String FINAL_STATIC_PUBLIC = "";  
static final public String STATIC_FINAL_PUBLIC = "";  
final public static String FINAL_PUBLIC_STATIC = "";  
public final static String PUBLIC_FINAL_STATIC = "";  
static public final String STATIC_PUBLIC_FINAL = "";  
public static final String PUBLIC_STATIC_FINAL = "";  
```
__Post__
```java
public static final String FINAL_STATIC_PUBLIC = "";
public static final String STATIC_FINAL_PUBLIC = "";
public static final String FINAL_PUBLIC_STATIC = "";
public static final String PUBLIC_FINAL_STATIC = "";
public static final String STATIC_PUBLIC_FINAL = "";
public static final String PUBLIC_STATIC_FINAL = "";
```

### Methods Declaration
__Pre__
```java
static synchronized protected final void staticMethod() {
    ...
}
```
__Post__
```java
protected static final synchronized void staticMethod() {
    ...
}
```

### Type Declaration 
__Pre__
```java
static private class PrivateStaticClass {
    ...
} 
```
__Post__
```java
private static class PrivateStaticClass {
    ...
} 
```

<VersionNotice />

