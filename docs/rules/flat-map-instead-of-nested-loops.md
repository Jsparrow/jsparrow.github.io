---
title: Replace Nested Loops with flatMap
ruleId: FlatMapInsteadOfNestedLoops
since: 2.2.0
minJavaVersion: 8
remediationCost: 15
links:
description:
    Nested For-Loops or invocations of forEach commonly used to iterate over all elements of a collection of collections, can be avoided by using flatMap().
    Using 'flatMap()' makes code much more readable and can be combined with other stream functions.
tags: ["Java 8", "Lambda", "Loop"]
---

# Replace Nested Loops with flatMap

## Description

Compound data structures similar to `Collection<Collection<T>>` are fairly common. 
This rule finds the nested invocations of `Stream::forEach` which are used to iterate over such data structures and replaces them with single invocations of  [`Stream::flatMap`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#flatMap-java.util.function.Function-).
Using `flatMap()` not only makes the code more readable and but also allows for additional combinations with other Stream operations.

## Benefits
Arguably, a flattened stream is easier to read.

## Code Changes

### Iterating over nested collections
__Pre__
```java
    List<List<User>> groups = findGroups();
    groups.forEach(group -> {
        group.forEach(user -> {
            sendAward(user);
        });
    });
```
__Post__
```java
    List<List<User>> groups = findGroups();
    groups.stream()
        .flatMap(group -> group.stream())
        .forEach(user -> {
            sendAward(user);
        });
```

### Nested Stream::forEach
__Pre__
```java
orders.stream()
    .map(Order::getOrderItems)
    .forEach(items -> {
        items.forEach(item -> {
            Product product = item.getProduct();
            int quantity = item.getQuantity();
            add(product, quantity);
        });
    });
```
__Post__
```java
orders.stream()
    .map(Order::getOrderItems)
    .flatMap(items -> items.stream())
    .forEach(item -> {
        Product product = item.getProduct();
        int quantity = item.getQuantity();
        add(product, quantity);
    });
```

### Deep nested loops

__Pre__
```java
    matrix3.stream().filter(row -> !row.isEmpty()).forEach(row -> {
        row.stream().filter(col -> !col.isEmpty()).forEach(col -> {
            col.stream().filter(cell -> !cell.isEmpty()).forEach(cell -> {
                cell.stream().filter(element -> !element.isEmpty()).map(element -> element.substring(0, 1)).forEach(element -> {
                    System.out.print(element);
                });
            });
        });
    });
```

__Post__
```java
matrix3.stream().filter(row -> !row.isEmpty()).flatMap(row -> row.stream())
    .filter(col -> !col.isEmpty())
    .flatMap(col -> col.stream())
    .filter(cell -> !cell.isEmpty())
    .flatMap(cell -> cell.stream())
    .filter(element -> !element.isEmpty())
    .map(element -> element.substring(0, 1))
    .forEach(element -> {
        System.out.print(element);
    });
```

<VersionNotice />


## Properties

<RuleProperties />
