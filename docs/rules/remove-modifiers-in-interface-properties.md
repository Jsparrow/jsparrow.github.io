---
title: Remove Modifiers in Interface Properties
description:
    Removes 'public' modifiers from methods and 'public static final' modifiers from fields declared in interfaces.

tags: ["Java 1.1", "Readability"]
---

# Remove Modifiers in Interface Properties

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | X.X.X |
| Minimum Java version            | X     |
| Remediation cost                | X min |
| Links                           | [XXX](https://sonarcloud.io/organizations/default/rules?open=squid%3AXXX&rule_key=squid%3AXXX) |

## Description

Prior to Java 9, all properties declared in interfaces are implicitly `public`.  
This rule, removes the `public` modifiers from method declarations and `public static final` modifiers from field declarations in interfaces.


## Benefits

Removes the clutter and unifies the property declarations in interfaces. 

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
public interface InterfaceWithProperties {
	
	public String FIELD_WITH_PUBLIC_MODIFIER = "";
	
	public static String FIELD_WITH_PUBLIC_STATIC_MODIFIER = "";
	
	public static final String FIELD_WITH_PUBLIC_STATIC_FINAL_MODIFIER = "";
	
	
	void method();
	
	public void publicMethod();
	
	public static void publicStaticMethod() {
		
	}
	
	public default void publicDefaultMethod() {
		
	}
}

```

__Post__
```java
public interface InterfaceWithProperties {
	
	String FIELD_WITH_PUBLIC_MODIFIER = "";
	
	String FIELD_WITH_PUBLIC_STATIC_MODIFIER = "";
	
	String FIELD_WITH_PUBLIC_STATIC_FINAL_MODIFIER = "";
	
	
	void method();
	
	void publicMethod();
	
	static void publicStaticMethod() {
		
	}
	
	default void publicDefaultMethod() {
		
	}
}
```