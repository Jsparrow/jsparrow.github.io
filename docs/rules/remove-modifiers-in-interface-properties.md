---
title: Remove Modifiers in Interface Properties
ruleId: RemoveModifiersInInterfaceProperties
since: 3.3.0
minJavaVersion: 1.1
remediationCost: 1
links:
    - displayName: "S2333"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2333&q=S2333"
    
description:
    Removes the 'public' modifiers from method declarations and 'public static final' modifiers from field declarations in Java interfaces.

tags: ["Java 1.1", "Readability"]
---

# Remove Modifiers in Interface Properties

## Description

By default, the attributes declared in Java interfaces are `public`.
This rule, removes the `public` modifiers from method declarations and `public static final` modifiers from field declarations in interfaces.

Note, from Java 9 it is possible to have [`private` methods](http://openjdk.java.net/jeps/213) in interfaces, too. 

## Benefits

Removes the clutter and unifies the attributes of Java interfaces. 


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
<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::