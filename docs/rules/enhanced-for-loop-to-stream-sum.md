---
title: Replace For-Loop with Stream::sum
ruleId: EnhancedForLoopToStreamSum
since: 2.2.0
minJavaVersion: 8
remediationCost: 10
links:
description:
    Transforms enhanced for-loops which are only used for summing up the elements of a collection to a 'Stream::sum' invocation.
tags: ["Java 8", "Lambda", "Loop", "Marker"]
---

# Replace For-Loop with Stream::sum

## Description
Transforms enhanced for-loops which are only used for summing up the elements of a collection into a stream and uses the sum operation to compute the result.

## Benefits

Applying this rule yields no major performance benefits. One could argue that readability is somewhat improved, at least if one is familiar with lambdas.


## Tags

::: tip Tags
<TagLinks />
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

<VersionNotice />


## Properties

<RuleProperties />
