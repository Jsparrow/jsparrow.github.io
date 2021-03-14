---
title: Remove Boxing for String Conversions
ruleId: PrimitiveBoxedForString
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S2131"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2131&q=S2131"
    
description:
    When calling 'toString()' on a boxed primitive no new instance of that primitive has to be created.
    This rule replaces occurrences of such code with a static method
tags: ["Free", "Java 1.1", "String Manipulation", "Performance"]
---

# Remove Boxing for String Conversions

## Description

When calling toString() on a boxed primitive no new instance of that primitive has to be created.
This rule replaces occurrences of such code with a static method.

## Benefits

This rule has performance benefits.
As described above boxing the object simply to use the static `toString` method is a waste of memory and CPU cycles.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Boolean
__Pre__
```java
new Boolean(true).toString();
```
__Post__
```java
Boolean.toString(true);
```

### Byte
__Pre__
```java
new Byte(1).toString();
```
__Post__
```java
Byte.toString(1);
```

### Double
__Pre__
```java
new Double(1.0).toString();
```
__Post__
```java
Double.toString(1.0);
```

### Float
__Pre__
```java
new Float(1.0).toString();
```
__Post__
```java
Float.toString(1.0);
```

### Integer
__Pre__
```java
new Integer(1).toString();
```
__Post__
```java
Integer.toString(1);
```

### Long
__Pre__
```java
new Long(1).toString();
```
__Post__
```java
Long.toString(1);
```

### Short
__Pre__
```java
new Short(1).toString();
```
__Post__
```java
Short.toString(1);
```

### Bytecode JDK 1.8 

__Pre__
```java
public void original(boolean b) {
    String value = new Boolean(b).toString();
}
```

```
 0 new #2 <java/lang/Boolean>
 3 dup
 4 iload_1
 5 invokespecial #3 <java/lang/Boolean.<init>>
 8 invokevirtual #4 <java/lang/Boolean.toString>
11 astore_2
12 return
```

__Post__
```java
public void transformed(boolean b) {
    String value = Boolean.toString(b);
}
```

```
0 iload_1
1 invokestatic #5 <java/lang/Boolean.toString>
4 astore_2
5 return
```

<VersionNotice />


## Properties

<RuleProperties />
