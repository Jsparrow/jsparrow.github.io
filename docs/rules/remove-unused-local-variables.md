---
title: Remove Unused Local Variables
ruleId: RemoveUnusedLocalVariables
since: 4.9.0
minJavaVersion: 1.1
remediationCost: 2

    
description:
    Finds and removes local variables that are never used actively.
tags: ["Java 1.1", "Readability", "Coding Conventions"]
---

# Remove Unused Local Variables

## Description

This rule finds declarations of local variables that are never used and removes them. 
Reassignments as well as increment and decrement operations are not counted as active usages. 
Any annotation except for `@Deprecated` and `@SuppressWarnings` prevents the local variable from being considered as unused. 

### Avoiding Side Effects

In general, any method or constructor invocation may cause side effects that may be necessary for the correct behavior of the program execution. 
Therefore, the initializers in local variable declarations or in the right-hand sides of reassignments that may cause side effects are preventing the local variable from being removed by this rule.  
Some exceptions are made for some popular Java built-in constructors and methods. For example:
* constructors of collections, maps, sets, and other popular Java classes, e.g., `new ArrayList<>()`, `new HashMap<>()`, `new Object()`, etc...
* methods for retrieving information about a collection without modifying it, e.g., `contains()`, `isEmpty()`, `size()`, `lastIndexOf()`, etc...
* factory methods for collections, e.g., `List.of()`, `Set.of()`, etc...

## Benefits

Some benefits of removing unused code, and in particular unused local variables, are:
* Reduces maintenance costs.
* Reduces the compilation time.
* May potentially eliminate unnecessary computations for unwanted side effects.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Remove Unused Variable Declaration

__Pre__
```java
String usedLocalVariable = "";
String unusedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

__Post__
```java
String usedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

### Selective Removing Of Variable Declaration Fragments

__Pre__
```java
String usedLocalVariable1 = "",
		unusedLocalVariable2 = "",
		usedLocalVariable3 = "",
		unusedLocalVariable4 = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable1);
blackHole.use(usedLocalVariable3);
```

__Post__
```java
String usedLocalVariable1 = "",
		usedLocalVariable3 = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable1);
blackHole.use(usedLocalVariable3);
```

### Remove Declaration Together With Re-Assignment

__Pre__
```java
String usedLocalVariable = "";
String unusedLocalVariable = "";

unusedLocalVariable = "s";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

__Post__
```java
String usedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

### Remove Unused Variable With @SuppressWarnings

__Pre__
```java
String usedLocalVariable = "";
@SuppressWarnings({ "unused" })
String unusedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

__Post__
```java
String usedLocalVariable = "";

BlackHole blackHole = new BlackHole();
blackHole.use(usedLocalVariable);
```

### Remove Unused Loop Counter

__Pre__
```java
BlackHole blackHole = new BlackHole();
int counter = 0;

for (String s : strings) {
	counter++;
	blackHole.use(s);
}
```

__Post__
```java
BlackHole blackHole = new BlackHole();

for (String s : strings) {
	blackHole.use(s);
}
```

<VersionNotice />


## Properties

<RuleProperties />
