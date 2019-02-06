---
title: Use Local Variable Type Inference
description:
    This rule replaces the types on the local variable declarations with the var keyword introduced in Java 10.
tags: ["Java 10", "Formatting", "Readability"]
---

# Use Local Variable Type Inference

[[toc]]

## Properties

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | [2.6.0](/eclipse/release-notes.html#_2-6-0)   |
| Minimum Java version            | 10   |
| Remediation cost                | 2 min |
| Links                           |  |

## Description

Local variable where the type could be inferred are changed to the type var. Keep in mind that the transformation is only useful, if the variables have speaking names, otherwise it is only disguising the nature of the variable.
The transformation is avoided for primitive types. For safety reasons, the transformation is also avoided if the initializer is an anonymous class declaration.

## Benefits

This rule reduces the length of variable definitions and therefore the improves the readability if the variable is named properly drastically.

## Requirement & Tags

::: warning Requirements
Java 10
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Variable Declarations

The list is currently not complete.

__Pre__

``` java
ArrayList<UserDefinedType> list = new ArrayList<UserDefinedType>();
```
__Post__

``` java
var list = new ArrayList<UserDefinedType>();
```

### Loops

__Pre__

``` java
for(UserDefinedType value : list) {
    consume(value);
}
```

__Post__

``` java
for(var value : list) {
    consume(value);
}
```


## Limitations

The following contains a list of cases where a transformation of type with var is not possible.

### Initializer containing  diamond operator
If the initialization of a local variable declaration uses diamond operator, then var can still be used but the argument type will be converted to Object. This may lead to compilation errors. Consider the example:

``` java
List<String> userIds = new ArrayList<>();
consumeIds(userIds);

....
public void consumeIds(List<String> userIds) {
...
}
```

Transformation of the List&lt;String&gt; to var, would change the type of the userIds to List&lt;Object&gt; which is not expected by the consumeIds method.

### Initialization with a subtype
If the type of the initializer is a  subtype of the declared type, then the transformation is not always possible. Consider the following lines:

``` java
List<String> list = new ArrayList<String>();
list = new LinkedList<String>();
```
The type List&lt;String&gt; cannot be replaced with var because in the second line, list is being reassigned with LinkedList which is not assign-compatible with ArrayList.

### Raw types
If the declaration or the initializer are raw type, then the transformation is not possible. The following table shows the cases when a var can be used instead of the concrete type:

|declaration|initialization|state|
|-|-|-|
|raw|raw| works|
|raw|concrete|not all cases are possible |
|concrete|raw|not all cases are possible |
|concrete|concrete|works |
