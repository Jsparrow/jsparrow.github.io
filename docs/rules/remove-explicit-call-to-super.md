---
title: Remove Explicit Call To super()
description:
    Removes unnecessary explicit call to the default constructor of the super class.
---

# Remove Explicit Call To super()

[[toc]]

## Description

If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. Hence, there is no need to explicitly call the default constructor of the super class.  

## Benefits

Improves the readability by removing unnecessary lines of code.

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | 2.7.0 |
| Minimum Java version            | 1.1   |
| Remediation cost                | 1 min |
| Links                           |  |

## Requirement & Tags

::: warning Requirements
None.
:::

::: tip Tags
Java 1.1, Readability
:::

## Code Changes

__Pre__

```java
class Parent {
     public Parent() {
         initParent();
     }
}

class Child extends Parent {
     public Child() {
           super();
           initChild();
     }
}
```

__Post__

```java
class Parent {
     public Parent() {
         initParent();
     }
}

class Child extends Parent {
     public Child() {
           initChild();
     }
}
```
