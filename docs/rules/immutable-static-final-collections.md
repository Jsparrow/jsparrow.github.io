---
title: Replace static final Collections with Collections.unmodifiable...()
ruleId: ImmutableStaticFinalCollections
since: 2.2.0
minJavaVersion: 2
remediationCost: 10
links:
    - displayName: "MutableCollection"
      url: "http://findbugs.sourceforge.net/bugDescriptions.html#MS_MUTABLE_COLLECTION"
    
description:
    Wraps the initialization of a final collection with 'Collections.unmodifiable...()'
tags: ["Java 1.2", "Coding Conventions"]
---

# Replace static final Collections with Collections.unmodifiable...()

## Description

An unmodifiable Collection can be created with the matching `Collections.unmodifiable...()` method.
 Some examples are `Collections.unmodifiableList()`, `Collections.unmodifiableSortedSet()`, etc.
A declaration of a Collection with the static and final modifiers is not sufficient because it might still be
 modifiable.
The Collections which are created with `Collections.unmodifiable...()` throw an
 `UnsupportedOperationException` as soon as a modification is attempted.

## Benefits

Applying this rule helps avoid common errors by making sure a static final field is always modifiable.


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

<VersionNotice />


## Properties

<RuleProperties />
