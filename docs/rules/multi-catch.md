---
title: Use Multi Catch
ruleId: MultiCatch
since: 1.0.0
minJavaVersion: 7
remediationCost: 5
links:
    - displayName: "S2147"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2147&q=S2147"
    
description:
    Java 7 introduced the possibility to merge multiple catch clauses into a single multi-catch clause. Merging is only possible if the catch statements are identical.
tags: ["Java 7", "Old Language Constructs", "Readability"]
defaultConfiguration: true
---

# Use Multi Catch

[[toc]]

## Properties

<RuleProperties />


## Description

Java 7 introduced the possibility to merge multiple catch clauses into a single multi-catch clause. Merging is only possible if the catch statements are identical.

## Benefits

Using this rule reduces clutter and improves readability.

## Requirement & Tags

::: warning Requirements
Java 7
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Merge and reduce subtype exceptions.
__Pre__
```java
public int cornerCaseInheritance(int i) {
    try {
        throwSomething(i);
    } catch (SecondChildChildException e) {
        e.printStackTrace();
    } catch (SecondChildException e) {
        e.printStackTrace();
    } catch (SecondChildSecondException e) {
        e.printStackTrace();
    } catch (FirstException e) {
        e.printStackTrace();
    } catch (SecondException e) {
        e.printStackTrace();
    }
    return i;
}
```

__Post__
```java
public int cornerCaseInheritance(int i) {
    try {
        throwSomething(i);
    } catch (FirstException | SecondException e) {
        e.printStackTrace();
    }
    return i;
}
```


### Merge identical catch clauses with different exception names
__Pre__
```java
public int cornerCaseDifferentExceptionNames(int i) {
    try {
        throwSomething(i);
    } catch (SecondChildChildException e) {
        e.printStackTrace();
    } catch (SecondChildException e2) {
        e2.printStackTrace();
    } catch (SecondChildSecondException e3) {
        e3.printStackTrace();
    } catch (FirstException e4) {
        e4.printStackTrace();
    } catch (SecondException e5) {
        e5.printStackTrace();
    }
    return i;
}
```

__Post__
```java
public int cornerCaseDifferentExceptionNames(int i) {
    try {
        throwSomething(i);
    } catch (FirstException | SecondException e) {
        e.printStackTrace();
    }
    return i;
}
```

### Merging identical catch clauses only

__Pre__
```java
public int cornerCaseDifferentBodies(int i) {
    try {
        throwSomething(i);
    } catch (FirstException e) {
        log.log(Level.TRACE, e.getMessage());   // A
    } catch (SecondException e) {
        log.log(Level.TRACE, e.getMessage());   // A
    } catch (ThirdException e) {
        log.log(Level.TRACE, e);                // B
    } catch (FourthException e) {
        log.log(Level.TRACE, e.getCause());     // C
    } catch (FifthException e) {
        log.log(Level.TRACE, e.getCause());     // C
    } catch (SixthException e) {
        log.log(Level.TRACE, e.toString());     // D
    }
    return i;
}
```

__Post__
```java
public int cornerCaseDifferentBodies(int i) {
    try {
        throwSomething(i);
    } catch (FirstException | SecondException e) {
        log.log(Level.TRACE, e.getMessage());   // A
    } catch (ThirdException e) {
        log.log(Level.TRACE, e);                // B
    } catch (FourthException | FifthException e) {
        log.log(Level.TRACE, e.getCause());     // C
    } catch (SixthException e) {
        log.log(Level.TRACE, e.toString());     // D
    }
    return i;
}
```

### Bytecode JDK 1.8 

__Pre__
```java
public void original() {
    try {
        throwSomeExceptions();
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    } catch (InvalidClassException e) {
        e.printStackTrace();
    }
}
```

```
 0 aload_0
 1 invokespecial #2 <at/splendit/MultiCatchSamples.throwSomeExceptions>
 4 goto 20 (+16)
 7 astore_1
 8 aload_1
 9 invokevirtual #4 <java/io/FileNotFoundException.printStackTrace>
12 goto 20 (+8)
15 astore_1
16 aload_1
17 invokevirtual #6 <java/io/InvalidClassException.printStackTrace>
20 return
```

__Post__
```java
public void transformed() {
    try {
        throwSomeExceptions();
    } catch (FileNotFoundException | InvalidClassException e) {
        e.printStackTrace();
    }
}
```

```
 0 aload_0
 1 invokespecial #2 <at/splendit/MultiCatchSamples.throwSomeExceptions>
 4 goto 12 (+8)
 7 astore_1
 8 aload_1
 9 invokevirtual #7 <java/io/IOException.printStackTrace>
12 return
```

<VersionNotice />

