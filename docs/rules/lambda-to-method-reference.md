---
title: Replace Expression Lambda with Method Reference
ruleId: LambdaToMethodReference
since: 2.0.0
minJavaVersion: 8
remediationCost: 2
links:
    - displayName: "S1612"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1612&q=S1612"
    
description:
    This rule simplifies expression lambdas by using method reference.
    The rule can only be applied if the parameters of the lambda expression and the method match.
tags: ["Free", "Java 8", "Lambda"]
---

# Replace Expression Lambda with Method Reference

## Description

This rule simplifies expression lambdas by using method reference.
The rule can only be applied if the parameters of the lambda expression and the method match.

## Benefits

Improves the readability by removing unnecessary syntax.


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

### Bytecode JDK 1.8 

__Pre__
```java
public void original(List<String> values) {
    values.forEach(value -> consume(value));
}
```

```
 0 aload_1
 1 aload_0
 2 invokedynamic #2 <accept, BootstrapMethods #0>
 7 invokeinterface #3 <java/util/List.forEach> count 2
12 return
```

__Post__
```java
public void transformed(List<String> values) {
    values.forEach(this::consume);
}
```

```
 0 aload_1
 1 aload_0
 2 invokedynamic #4 <accept, BootstrapMethods #1>
 7 invokeinterface #3 <java/util/List.forEach> count 2
12 return
```

<VersionNotice />


## Properties

<RuleProperties />
