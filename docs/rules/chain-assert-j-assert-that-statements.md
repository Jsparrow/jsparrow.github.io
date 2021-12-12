---
title: Chain AssertJ AssertThat Statements
ruleId: ChainAssertJAssertThatStatements
since: 4.6.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S5853"
      url: "https://sonarcloud.io/organizations/default/rules?open=java%3AS5853&q=S5853&rule_key=java%3AS5853"
    
description:
    AssertJ assertions carried out on the same object can be chained instead of using multiple assertThat, avoiding duplication and increasing the clarity of the code.
tags: ["Java 8", "Coding Conventions", "Readability"]
---

# Chain AssertJ AssertThat Statements

## Description

AssertJ AssertThat Statements begin with the invocation of one of the oveloaded 'assertThat' methods defined in the class [`org.assertj.core.api.Assertions`](https://javadoc.io/doc/org.assertj/assertj-core/latest/org/assertj/core/api/Assertions.html), followed by assertions on the argument of the 'assertThat'. This rule looks for consecutive AssertJ AssertThat Statements targeting the same object and chains them together. This reduces redundant code and increases readability.

## Benefits

Applying this rule makes the code more readable.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Assertions on String

__Pre__
```java
	String helloWorld = "Hello World!";
	assertThat(helloWorld).isNotNull();
	assertThat(helloWorld).isNotEmpty();
	assertThat(helloWorld).startsWith("Hello ");
	assertThat(helloWorld).contains(" ");
	assertThat(helloWorld).contains("World");
	assertThat(helloWorld).endsWith("!");
	assertThat(helloWorld).doesNotStartWith("World");
	assertThat(helloWorld).doesNotContain("--");
	assertThat(helloWorld).doesNotEndWith("Hello");
```

__Post__
```java
	String helloWorld = "Hello World!";
	assertThat(helloWorld)
		.isNotNull()
		.isNotEmpty()
		.startsWith("Hello ")
		.contains(" ")
		.contains("World")
		.endsWith("!")
		.doesNotStartWith("World")
		.doesNotContain("--")
		.doesNotEndWith("Hello");
```

### Assertions on Primitive Int

__Pre__
```java
	int intValue = 10;
	assertThat(intValue).isPositive();
	assertThat(intValue).isEven();
	assertThat(intValue).isNotEqualTo(-10);
	assertThat(intValue).isGreaterThan(9);
	assertThat(intValue).isEqualTo(10);
	assertThat(intValue).isLessThan(11);		
```

__Post__
```java
	int intValue = 10;
	assertThat(intValue)
		.isPositive()
		.isEven()
		.isNotEqualTo(-10)
		.isGreaterThan(9)
		.isEqualTo(10)
		.isLessThan(11);		
```

### Assertions on  String List

__Pre__
```java
	List<String> stringList = Arrays.asList("String-1", "String-2");
	assertThat(stringList).isNotNull();
	assertThat(stringList).hasSize(2);
	assertThat(stringList).matches(s -> !s.isEmpty());
	assertThat(stringList).contains("String-1", atIndex(0));
	assertThat(stringList).contains("String-2", atIndex(1));
```

__Post__
```java
	List<String> stringList = Arrays.asList("String-1", "String-2");
	assertThat(stringList)
		.isNotNull()
		.hasSize(2)
		.matches(s -> !s.isEmpty())
		.contains("String-1", atIndex(0))
		.contains("String-2", atIndex(1));
```

### Assertions on File

__Pre__
```java
	File file = new File("pom.xml");
	assertThat(file).isNotNull();
	assertThat(file).exists();
	assertThat(file).satisfies(File::isFile);
	assertThat(file).hasFileName("pom.xml");
	assertThat(file).canRead();
```

__Post__
```java
	File file = new File("pom.xml");
	assertThat(file)
		.isNotNull()
		.exists()
		.satisfies(File::isFile)
		.hasFileName("pom.xml")
		.canRead();
```

### Assertions on Type Literal

__Pre__
```java
	assertThat(String.class).isFinal();
	assertThat(String.class).isNotSameAs(Object.class);
	assertThat(String.class).isNotInterface();
	assertThat(String.class).hasMethods("startsWith", "endsWith");
	assertThat(String.class).satisfies(new Condition<>(
            clazz -> !Modifier.isAbstract(clazz.getModifiers()), ""));
```

__Post__
```java
	assertThat(String.class)
		.isFinal()
		.isNotSameAs(Object.class)
		.isNotInterface()
		.hasMethods("startsWith", "endsWith")
		.satisfies(new Condition<>(
            clazz -> !Modifier.isAbstract(clazz.getModifiers()), ""));
```

### Assertions on Predicate

__Pre__
```java
	Predicate<String> stringPredicate = s -> s.contains("-");
	assertThat(stringPredicate).isNotNull();
	assertThat(stringPredicate).rejects("a", "b");
	assertThat(stringPredicate).rejectsAll(Arrays.asList("c", "d", "e"));
	assertThat(stringPredicate).accepts("s-1", "s-2");
	assertThat(stringPredicate).acceptsAll(Arrays.asList("s-3", "s-4", "s-5"));
```

__Post__
```java
	Predicate<String> stringPredicate = s -> s.contains("-");
	assertThat(stringPredicate)
		.isNotNull()
		.rejects("a", "b")
		.rejectsAll(Arrays.asList("c", "d", "e"))
		.accepts("s-1", "s-2")
		.acceptsAll(Arrays.asList("s-3", "s-4", "s-5"));
```

### assertThatThrownBy on ThrowingCallable

__Pre__
```java
	ThrowingCallable throwingCallable = () -> {
		throw new Exception("Unexpected exception!");
	};
	assertThatThrownBy(throwingCallable).isInstanceOf(Exception.class);
	assertThatThrownBy(throwingCallable).hasMessageStartingWith("Unexpected");
	assertThatThrownBy(throwingCallable).hasMessageContaining(" ", "exception");
	assertThatThrownBy(throwingCallable).hasMessageEndingWith("!");
```

__Post__
```java
	ThrowingCallable throwingCallable = () -> {
		throw new Exception("Unexpected exception!");
	};
	assertThatThrownBy(throwingCallable)
		.isInstanceOf(Exception.class)
		.hasMessageStartingWith("Unexpected")
		.hasMessageContaining(" ", "exception")
		.hasMessageEndingWith("!");
```
<VersionNotice />


## Properties

<RuleProperties />
