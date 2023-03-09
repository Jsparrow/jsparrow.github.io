---
title: Use Local Variable Type Inference
ruleId: LocalVariableTypeInference
since: 2.6.0
minJavaVersion: 10
remediationCost: 2
links:
description:
    This rule replaces the types on the local variable declarations with the reserved word var introduced in Java 10.
tags: ["Java 10", "Readability", "Marker"]
---

# Use Local Variable Type Inference

## Description

The derivable types on the declaration of local variables are replaced by the reserved word `var`.
Keep in mind that the transformation is only useful, if the variables have speaking names, otherwise it is only disguising the nature of the variable.
The transformation is avoided for primitive types. For safety reasons, the transformation is also avoided if the initializer is an anonymous class declaration.

::: warning Requirements
Java 10
:::

## Benefits

This rule reduces the length of variable definitions and therefore  improves the readability if the variable is named properly drastically.


## Tags

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

The following contains a list of cases where a transformation of type to `var` is not possible.

### Initializer containing  diamond operator
If the initialization of a local variable declaration uses diamond operator, then `var` can still be used but the argument type will be converted to Object. This may lead to compilation errors. Consider the example:

``` java
List<String> userIds = new ArrayList<>();
consumeIds(userIds);

....
public void consumeIds(List<String> userIds) {
...
}
```

Transforming the `List<String>` to `var`, would change the type of the userIds to `ArrayList<Object>` which is not expected by the consumeIds method.

### Initialization with a subtype
If the type of the initializer is a subtype of the declared type, then the transformation is not always possible. Consider the following lines:

``` java
List<String> list = new ArrayList<String>();
list = new LinkedList<String>();
```
The type `List<String>` cannot be replaced with `var` because in the second line, list is being reassigned with LinkedList which is not assign-compatible with ArrayList.

### Raw types
If the declaration or the initializer are raw type, then the transformation is not possible without changing the type of the variable. The following table shows the cases when a `var` can be used instead of the concrete type:

|declaration|initialization|state|
|-|-|-|
|raw|raw| works|
|raw|concrete|not all cases are possible |
|concrete|raw|not all cases are possible |
|concrete|concrete|works |

<VersionNotice />


## Properties

<RuleProperties />
