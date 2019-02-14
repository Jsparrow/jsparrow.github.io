---
title: Replace Expression Lambda with Method Reference
description:
    This rule simplifies expression lambdas by using method reference.
    The rule can only be applied if the parameters of the lambda expression and the method match.
tags: ["Free", "Java 8", "Lambda"]
---

# Replace Expression Lambda with Method Reference

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 2 min |
| Links                           | [S1612](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1612&q=squid%3AS1612) |

## Description

This rule simplifies expression lambdas by using method reference.
The rule can only be applied if the parameters of the lambda expression and the method match.

## Benefits

Improves the readability by removing unnecessary syntax.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Reference to static method

__Pre__
```java
 Collections.sort(personList, (Person a, Person b) -> Person.compareByAge(a, b));
```

__Post__
```java
Collections.sort(personList, Person::compareByAge);
```

### Reference to instance method

__Pre__
```java
Collections.sort(personList, (Person a, Person b) -> comparisonProvider.compareByName(a, b));
```

__Post__
```java
Collections.sort(personList, comparisonProvider::compareByName);
```

### Reference to local method

__Pre__
```java
personList.forEach((Person person) -> doSomething(person));
```

__Post__
```java
personList.forEach(this::doSomething);
```

### Reference to instance method of arbitrary type

__Pre__
```java
Arrays.sort(stringArray, (String a, String b) -> a.compareToIgnoreCase(b));
```

__Post__
```java
Arrays.sort(stringArray, String::compareToIgnoreCase);
```

### Reference to constructor

__Pre__
```java
Set<Person> persSet = transferElements(personList, () -> new HashSet<>());
```

__Post__
```java
Set<Person> persSet = transferElements(personList, HashSet::new);
```
