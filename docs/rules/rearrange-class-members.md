---
title: Rearrange Class Members
description:
    This rule rearranges the body declarations of a class based on the Oracle Code Convention for File Organization.
tags: ["Java 1.1", "Coding Conventions", "Readability"]
---

# Rearrange Class Members

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.1.0](/eclipse/release-notes.html#_1-1-0) |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           | [S1213](https://sonarcloud.io/organizations/default/rules?languages=java&open=squid%3AS1213&q=squid%3AS1213) |

## Description

This rule rearranges the body declarations of a class based on the Oracle Code Convention for File Organization.
The order of members in a class or interface should appears as follows:

1. Class (static) variables
2. Instance variables
3. Constructors
4. Methods

Furthermore, the members of the above list are also sorted according to their access modifier.
The priority of the access modifiers is as follows:

1. public
2. protected
3. none (package private)
4. private

Initializers are placed between instance variables and constructors.
The rest of inner type declarations like enumeration declarations, annotation declarations and inner class declarations are placed below the method declarations.

## Benefits

Adhering to code conventions such as file member orderings improves maintainability and readability.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
public class RearrangeClassMembersRule {

	private void sampleMethod() {

	}

	private static final String A_STATIC_FINAL_FIELD = "";

	class SomethingCouldBeInnerType {
		public SomethingCouldBeInnerType() {

		}

		private String foo = "";
	}

	private String foo = "foo-value";

	private enum Days {
		Mon, Tue, Wed, Thu, Fri, Sat, Sun,
	}

	protected String protectedFoo;

	{{
		var a = Days.Mon;
	}}

	public static void staticMethod() {

	}

	String defaultModifierFoo;
	public String publicFoo;

	public RearrangeClassMembersRule() {

	}
}
```

__Post__
```java
public class RearrangeClassMembersRule {

	private static final String A_STATIC_FINAL_FIELD = "";
	private String foo = "foo-value";
	protected String protectedFoo;
	String defaultModifierFoo;
	public String publicFoo;

	{{
		var a = Days.Mon;
	}}

	public RearrangeClassMembersRule() {

	}

	private void sampleMethod() {

	}

	public static void staticMethod() {

	}

	private enum Days {
		Mon, Tue, Wed, Thu, Fri, Sat, Sun,
	}

	class SomethingCouldBeInnerType {
		private String foo = "";

		public SomethingCouldBeInnerType() {

		}
	}
}
```
