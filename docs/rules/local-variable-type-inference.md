---
title: Local Variable Type Inference
description:
    This rule replaces the types on the local variable declarations with the var keyword introduced in Java 10. 
---


# Local Variable Type Inference -- needs update

Created by Ludwig Werzowa, last modified on May 18, 2018

[[toc]]

## Description

For example, the following declaration:
``` java
ArrayList<UserDefinedType> list = new ArrayList<UserDefinedType>();
```
will be converted to 
``` java
var list = new ArrayList<UserDefinedType>();
```

The rules cover the declaration of the parameters of enhanced for loops. For example, 
``` java
for(UserDefinedType value : list) {
    consume(value);
}
```

will be transformed to:
``` java
for(var value : list) {
    consume(value);
}
```

The transformation is avoided for primitive types. For safety reasons, the transformation is also avoided if the initializer is an anonymous class declaration. 

## Technical Documentation

### Rule Boundaries

The following contains a list of cases where a transformation of type with var is not possible. 

#### Initializer containing  diamond operator
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
 
#### Initialization with a subtype
If the type of the initializer is a  subtype of the declared type, then the transformation is not always possible. Consider the following lines:

``` java
List<String> list = new ArrayList<String>();
list = new LinkedList<String>();
```
The type List&lt;String&gt; cannot be replaced with var because in the second line, list is being reassigned with LinkedList which is not assign-compatible with ArrayList. 

#### Raw types
If the declaration or the initializer are raw type, then the transformation is not possible. The following table shows the cases when a var can be used instead of the concrete type:

|declaration|initilization|state|
|-|-|-|
|raw|raw|Shouldwork|
|raw|concrete|Does NOT always work |
|concrete|raw|Does NOT always work |
|concrete|concrete|Should work |