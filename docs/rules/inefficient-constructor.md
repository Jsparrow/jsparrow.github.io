---
title: Replace Inefficient Constructors with valueOf()
ruleId: InefficientConstructor
since: 1.0.0
minJavaVersion: 5
remediationCost: 5
links:
    - displayName: "S2129"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2129&q=S2129"
    
description:
   All calls to a constructor of a primitive type will be replaced by the corresponding static 'valueOf()' method. For example 'new Integer("1")' becomes 'Integer.valueOf("1")'.
tags: ["Free", "Java 5", "Coding Conventions", "Performance"]
---

# Replace Inefficient Constructors with valueOf()

## Description

All calls to a constructor of a primitive type will be replaced by the corresponding static `valueOf()` method. For example `new Integer("1")` becomes `Integer.valueOf("1")`.

## Benefits

Using this rule saves memory and CPU cycles, as the constructors are not needed in this case. Furthermore, the constructors are deprecated in Java 9, which is an indication that they will eventually be removed from the language altogether.


## Code Changes

### Number object types

The following change applies for Integer, Double, Float and Long.

__Pre__

```java
new Integer(1);

new Integer("1");
```

__Post__

```java
Integer.valueOf(1);

Integer.valueOf("1");
```

### Boolean objects

__Pre__

```java
new Boolean(true);
new Boolean("true");
new Boolean(false);
new Boolean("false");
new Boolean("anyOtherStringThanTrue");
new Boolean((String) input);
new Boolean((Boolean) input);
```

__Post__

```java
Boolean.valueOf(true);
Boolean.valueOf(true);
Boolean.valueOf(false);
Boolean.valueOf(false);
Boolean.valueOf(false);
Boolean.valueOf((String) input);
Boolean.valueOf((Boolean) input);
```

### Bytecode JDK 1.8 

__Pre__
```java
public void original() {
   Integer val1 = new Integer(1);
   Integer val2 = new Integer("1");
}
```

```
 0 new #2 <java/lang/Integer>
 3 dup
 4 iconst_1
 5 invokespecial #3 <java/lang/Integer.<init>>
 8 astore_1
 9 new #2 <java/lang/Integer>
12 dup
13 ldc #4 <1>
15 invokespecial #5 <java/lang/Integer.<init>>
18 astore_2
19 return
```

__Post__
```java
public void transformed() {
   Integer val1 = Integer.valueOf(1);
   Integer val2 = Integer.valueOf("1");
}
```

```
 0 iconst_1
 1 invokestatic #6 <java/lang/Integer.valueOf>
 4 astore_1
 5 ldc #4 <1>
 7 invokestatic #7 <java/lang/Integer.valueOf>
10 astore_2
11 return
```


<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::