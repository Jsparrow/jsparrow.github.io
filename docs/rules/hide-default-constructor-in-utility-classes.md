---
title: Hide Default Constructor In Utility Classes
description:
    Hides the default constructor of utility classes by adding a private constructor.

tags: ["Java 1.1", "Coding Conventions"]
---

# Hide Default Constructor In Utility Classes

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [3.11.0](/eclipse/release-notes.html#_3-11-0) |
| Minimum Java version            | 1.1     |
| Remediation cost                | 5 min |
| Links                           | [S1118](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1118&rule_key=squid%3AS1118) |

## Description

Utility classes are classes containing `static` properties only. Those classes should not be instantiated. A private constructor, which throws an `IllegalStateException`, is introduced to utility classes by this rule, if the following criteria are met:
- Only `static` methods and fields are present
- No constructor is declared
- No main method is defined
- The default constructor isn't invoked anywhere in the current workspace

This hides the default public constructor and thus prevents the instantiation of such a class.

## Benefits

Prevents the bad practice of unnecessary instatiation of utility classes.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

```java
    public class UtilityClass {
        public static doSomething() {
            ...
            System.out.println("did something");
        }

        public static doSomethingElse() {
            ...
            System.out.println("did something else");
        }
    }
```

__Post__

```java
    public class UtilityClass {
        private UtilityClass() {
            throw new IllegalStateException("Utility class");
        }

        public static doSomething() {
            ...
            System.out.println("did something");
        }

        public static doSomethingElse() {
            ...
            System.out.println("did something else");
        }
    }
```