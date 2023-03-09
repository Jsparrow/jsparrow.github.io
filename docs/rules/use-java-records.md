---
title: Use Java Records
ruleId: UseJavaRecords
since: 4.5.0
minJavaVersion: 16
remediationCost: 20
links:
    - displayName: "S6206"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS6206&q=S6206"
    
description:
    Since Java 16, record classes are a new kind of class in the Java language. Record classes help to model plain data aggregates with less ceremony than normal classes. This rule replaces the declarations of local classes, inner classes, and package private root classes with record class declarations.
tags: ["Java 16", "Old Language Constructs", "Readability", "Marker"]
---

# Use Java Records

## Description

Since Java 16, record classes are a new kind of class in the Java language. Record classes help to model plain data aggregates with less ceremony than normal classes. 
This rule replaces the declarations of: 
* local classes 
* inner classes 
* package private root classes

with record class declarations. 
Thus dropping some boilerplate code, guaranteeing immutability in language level, and providing better compatibility with the new or upcoming features, e.g., Pattern Matching.

::: warning Requirements
* Java 16
:::

## Benefits

Guarantees immutability. Eliminates boilerplate code. Encourages better serialization. Boosts compatibility with upcoming features. 

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Local Classes

__Pre__
```java
void plainGeometry() {
	// ...
	class Point {
		private final int x;
		private final int y;

		Point(int x, int y) {
		this.x = x;
			this.y = y;
		}

		public int x() {
			return x;
		}

		public int y() {
			return y;
		}
	}
	// ...
}
```

__Post__
```java
void plainGeometry() {
	// ...
	record Point(int x, int y) {}
	//...
}
```

### Nested Classes

__Pre__
```java
public class PlainGeometry {
	// ...
	private static final class Point {
		private final int x;
		private final int y;

		Point(int x, int y) {
			this.x = x;
			this.y = y;
		}

		public int x() {
			return x;
		}

		public int y() {
			return y;
		}
	}
	// ...
}
```

__Post__
```java
public class PlainGeometry {
	//...
	private record Point(int x, int y) {}
	//...
}
```

### Multiple Constructors

__Pre__
```java
// ...
private static final class Point {
	private final int x;
	private final int y;

	Point(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	Point() {
		this(0,0);
	}

	public int x() {
		return x;
	}

	public int y() {
		return y;
	}
}
// ...
```

__Post__
```java
//...
private record Point(int x, int y) {
	
	Point() {
		this(0,0);
	}
}
//...
```

### Parameterized Inner Classes

__Pre__
```java
//...
private static final class GenericWrapper<T> {
	private final T value;

	public GenericWrapper(T value) {
		this.value = value;
	}

	public T value() {
		return value;
	}
}
//...
```

__Post__
```java
//...
private record GenericWrapper<T> (T value) {}
//...
```

### Additional Methods

__Pre__
```java
// ...
private static final class Person {
	private final String firstName;
	private final String lastName;

	Person(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public String firstName() {
		return firstName;
	}

	public String lastName() {
		return lastName;
	}
	
	public String name() {
		return firstName + " " + lastName;
	}			
}
// ...
```

__Post__
```java
//...
private record Person(String firstName, String lastName) {
	
	public String name() {
		return firstName + " " + lastName;
	}
}
//...
```

<VersionNotice />

## Properties

<RuleProperties />
