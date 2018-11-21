---
title: Replace For-Loop with Stream::sum
description:
    Transforms enhanced for-loops which are only used for summing up the elements of a collection to a `Stream::sum` invocation.
---

# Replace For-Loop with Stream::sum

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 2.1.1 |
| Minimum Java version            | 8     |
| Remediation cost                | 10 min |
| Links                           |       |

## Description
Transforms enhanced for-loops which are only used for summing up the elements of a collection into a stream and uses the sum operation to compute the result.

## Benefits

Applying this rule yields no major performance benefits. One could argue that readability is somewhat improved, at least if one is familiar with lambdas.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Lambda, Loop
:::

## Code Changes

### List of integers
__Pre__
```java
List<Integer> numbers = generateIntList(input);
int sum = 0;
for(int n : numbers) {
    sum += n;
}
```

__Post__
```java
List<Integer> numbers = generateIntList(input);
int sum = numbers.stream().mapToInt(Integer::intValue).sum();
```

### List of doubles
__Pre__
```java
List<Double> numbers = generateDoubleList(input);
double sum = 0;
for(double n : numbers) {
    sum += n;
}
```

__Post__
```java
List<Double> numbers = generateDoubleList(input);
double sum = numbers.stream().mapToDouble(Double::doubleValue).sum();
```
