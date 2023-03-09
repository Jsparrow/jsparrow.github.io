---
title: Replace Set.removeAll With ForEach
ruleId: ReplaceSetRemoveAllWithForEach
since:  4.13.0
minJavaVersion: 8
remediationCost: 5
    
description:
    Calling the method 'removeAll' on a Set with a List as invocation argument may lead to performance problems due to a possible O(n^2) complexity. This rule replaces such invocations. For example, the invocation 'mySet.removeAll(myList);' is replaced by 'myList.forEach(mySet::remove);'.
tags: ["Java 8", "Performance", "Marker"]
---

# Replace Set.removeAll With ForEach

## Description
Calling the method [`java.util.Set#removeAll(java.util.Collection)`](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Set.html#removeAll(java.util.Collection)) with an instance of [`java.util.List`](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/List.html) as an argument may lead to performance problems due to a possible O(n^2) complexity. This rule replaces such invocations. For example, the invocation `mySet.removeAll(myList);` is replaced by `myList.forEach(mySet::remove);`.

## Benefits
The benefit of applying this rule may depend on your installed Java version and on the subtype of the Set on which the 'removeAll' method is invoked. Benchmark tests on our systems indicated an improvement. However, we recommend you to carry out all necessary performance tests before applying this rule. 

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Remove all elements of an ArrayList from a HashSet

__Pre__
```java
	void removeStringsFromSet(Set<String> stringSet, List<String> stringList) {
		stringSet.removeAll(stringList);
	}
```

__Post__
```java
	void removeStringsFromSet(Set<String> stringSet, List<String> stringList) {
		stringList.forEach(stringSet::remove);
	}
```

<VersionNotice />


## Properties

<RuleProperties />
