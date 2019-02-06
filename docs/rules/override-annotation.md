---
title: Use @Override Annotation
description:
    This rule adds the @Override annotation to methods overriding or implementing parent class methods.
tags: ["Free", "Java 6", "Readability", "Coding Conventions"]
---

# Use @Override Annotation

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 6     |
| Remediation cost                | 5 min |
| Links                           | [squid:S1161](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1161) |

## Description

This rule adds the @Override annotation to methods overriding or implementing parent class methods.
Even though using @Override it is not mandatory, using this annotation is considered a best practice for
 two main reasons:
 1. It ensures that the method signature is a sub-signature of the overridden method.
 2. It improves the readability.

## Benefits

Improves the readability by making it clear that the methods are overridden and helps avoiding potential bugs arising from unintended changes in method signatures.

## Requirement & Tags

::: warning Requirements
Java 6
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Overriding method from parent class
__Pre__
```java
class Parent {
    public void foo() {
        print("Parent");
    }
}

class Child extends Parent {
    public void foo() {
        print("Child");
    }
}
```

__Post__
```java
class Parent {
    public void foo() {
        print("Parent");
    }
}

class Child extends Parent {
    @Override
    public void foo() {
        print("Child");
    }
}
```

### Overriding method from implemented interface
__Pre__
```java
interface IFoo {
    String findFoo();
}

class Foo {
    public String findFoo() {
        return "Foo";
    }
}
```

__Post__
```java
interface IFoo {
    String findFoo();
}

class Foo {
    @Override
    public String findFoo() {
        return "Foo";
    }
}
```
