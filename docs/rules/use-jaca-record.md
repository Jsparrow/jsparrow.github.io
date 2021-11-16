---
title: Use Java Record
ruleId: UseJavaRecords
since: 4.5.0
minJavaVersion: 16
remediationCost: 20
links:
    - displayName: "S6206"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS6206&q=S6206"
    
description:
    This rule replaces declarations of immutable data wrapper classes by record declarations introduced as feature in Java 16. For example, a 'class Point {...}' declaration with the two private final int fields 'x' and 'y' can be replaced by a 'record Point(int x, int y) {...}' declaration.
tags: ["Java 16", "Old Language Constructs", "Readability"]
---

# Use Java Record

## Description

Detailed Description will be here...


::: warning Requirements
* Java 16
:::

## Benefits

Reduces redundant code by replacing by the corresponding - more compact - record declaration. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Point as Local Class

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
		record Point(int x, int y) {
		}
		//...
	}
```

### Point as Nested Class

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
			private record Point(int x, int y) {
			}
			//...
		}
```

### Additional Constructor

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

### Record with Type Parameter

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
		private record GenericWrapper<T> (T value) {
		}
		//...
```

### Additional Method

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

### 6

__Pre__
```java
		// ...
		private static final class Person implements IPerson {
			private final String firstName;
			private final String lastName;

			Person(String firstName, String lastName) {
				this.firstName = firstName;
				this.lastName = lastName;
			}

			@Override
			public String firstName() {
				return firstName;
			}

			@Override
			public String lastName() {
				return lastName;
			}
			// ...
		}
		// ...
```

__Post__
```java
		//...
		private record Person(String firstName, String lastName) implements IPerson {
		}
		//...
```

<VersionNotice />

## Properties

<RuleProperties />
