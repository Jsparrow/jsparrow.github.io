---
title: Use Functional Interfaces
ruleId: FunctionalInterface
since: 1.0.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S1604"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1604&q=S1604"
    
description:
    Converts anonymous inner classes to equivalent lambda expressions.
tags: ["Java 8", "Old Language Constructs", "Lambda"]
---

# Use Functional Interfaces

## Description

Converts anonymous inner classes to equivalent lambda expressions.

## Benefits

Increases the performance, because lesser objects need to be created. Improves readability because a lot of boilerplate code will be removed.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Remove anonymous instantiation of functional interface

__Pre__

```java
Runnable runnable = new Runnable() {
    @Override
    public void run() {
        System.out.println("xx");
    }
};
```

__Post__

```java
Runnable runnable = () -> {
    System.out.println("xx");
};
```

### Rename variables if they are present in the scope outside of the inner class

__Pre__

```java
int a = 5;

AFunctionalInterface foo = new AFunctionalInterface() {
    @Override
    public void method(int a) {
        int b = a;
    }
};
```

__Post__

```java
int a = 5;

AFunctionalInterface foo = (int a1) -> {
    int b = a1;
};
```

### Bytecode JDK 1.8 

__Pre__
```java
public Runnable runableWithAnonymousClass() {
    Runnable r = new Runnable() {
        public void run() {
            System.out.println("Anonymous class");
        }
    };
    return r;
}
```

```
 0 new #2 <at/splendit/AnonymousClassesToLambdaExpressions$1>
 3 dup
 4 aload_0
 5 invokespecial #3 <at/splendit/AnonymousClassesToLambdaExpressions$1.<init>>
 8 astore_1
 9 aload_1
10 areturn
```

__Post__
```java
public Runnable runableWithLambda() {
    Runnable r = () -> {
            System.out.println("Lambda");
        };
    return r;
}
```

```
0 invokedynamic #4 <run, BootstrapMethods #0>
5 astore_1
6 aload_1
7 areturn


0 getstatic #5 <java/lang/System.out>
3 ldc #6 <Lambda>
5 invokevirtual #7 <java/io/PrintStream.println>
8 return
```

## Limitations

Variables that are used inside the anonymous class must be effectively final.

<VersionNotice />


## Properties

<RuleProperties />
