---
title: Replace static final Collections with Collections.unmodifiable...()
description:
    Wraps the initialization of a final collection with Collections.unmodifiable...()
tags: ["Rule", "Java 1.2", "Conventions"]
---

# Replace static final Collections with Collections.unmodifiable...()

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.2.0](/eclipse/release-notes.html#_2-2-0) |
| Minimum Java version            | 2     |
| Remediation cost                | 10 min |
| Links                           | [MutableCollection](http://findbugs.sourceforge.net/bugDescriptions.html#MS_MUTABLE_COLLECTION) |

## Description

An unmodifiable Collection can be created with the matching Collections.unmodifiable...() method.
 Some examples are Collections.unmodifiableList(), Collections.unmodifiableSortedSet(), etc.
A declaration of a Collection with the static and final modifiers is not sufficient because it might still be
 modifiable.
The Collections which are created with Collections.unmodifiable...() throw an
 UnsupportedOperationException as soon as a modification is attempted.

## Benefits

Applying this rule helps avoid common errors by making sure a static final field is always modifiable.

## Requirement & Tags

::: warning Requirements
Java 1.2
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Final `Collection`

__Pre__
```java
private static final Collection<String> CONSTANT_COLLECTION = new ArrayList<String>() {
    {
        add("foo");
        add("bar");
    }
};
```

__Post__
```java
private static final Collection<String> CONSTANT_COLLECTION = Collections.unmodifiableCollection(new ArrayList<String>() {
    {
        add("foo");
        add("bar");
    }
});
```

### Final `Map`
__Pre__
```java
private static final Map<String, String> CONSTANT_MAP = new HashMap() {
    {
        put("foo", "bar");
    }
};
```

__Post__
```java
private static final Map<String, String> CONSTANT_MAP = Collections.unmodifiableMap(new HashMap() {
    {
        put("foo", "bar");
    }
});
```
