---
title: Remove Redundant Close
ruleId: RemoveRedundantClose
since: 4.11.0
minJavaVersion: 7
remediationCost: 2
links:
    - displayName: "S4087"
      url: "https://sonarcloud.io/organizations/default/rules?q=close&open=java%3AS4087"
    
description:
    This rule is used to remove redundant 'close()'-invocation statements on resources which are declared in the header of try-with-resource statements.
tags: ["Java 7", "Coding Conventions", "Readability"]
defaultConfiguration: true
---

# Remove Redundant Close

## Description

This rule looks for redundant invocations of the method [`close()`](https://docs.oracle.com/en/java/javase/18/docs/api/java.base/java/lang/AutoCloseable.html#close()) on resources which are declared in the header of try-with-resource statements 
 and tries to remove them.

## Benefits

Applying this rule removes unnecessary code.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Remove Close For One Resource

__Pre__
```java
		try (BufferedReader br = new BufferedReader(new FileReader(path))) {
			System.out.println("First line: " + br.readLine());
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
```

__Post__
```java
		try (BufferedReader br = new BufferedReader(new FileReader(path))) {
			System.out.println("First line: " + br.readLine());
		} catch (IOException e) {
			e.printStackTrace();
		}
```

### Remove Close For Resource Declared Outside The Header

__Pre__
```java
		BufferedReader br = new BufferedReader(new FileReader(path));
		try (br) {
			System.out.println("First line: " + br.readLine());
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
```

__Post__
```java
		BufferedReader br = new BufferedReader(new FileReader(path));
		try (br) {
			System.out.println("First line: " + br.readLine());
		} catch (IOException e) {
			e.printStackTrace();
		}
```

### Remove Close For Multiple Resources

__Pre__

```java
		try (BufferedReader br = new BufferedReader(new FileReader(path));
				BufferedReader br2 = new BufferedReader(new FileReader(path2))) {
			System.out.println("First line of first file: " + br.readLine());
			br.close();
			System.out.println("First line of second file " + br2.readLine());
			br2.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
```

__Post__
```java
		try (BufferedReader br = new BufferedReader(new FileReader(path));
				BufferedReader br2 = new BufferedReader(new FileReader(path2))) {
			System.out.println("First line of first file: " + br.readLine());
			System.out.println("First line of second file " + br2.readLine());
		} catch (IOException e) {
			e.printStackTrace();
		}
```

## Limitations

The 'close()'-invocation statement can only be removed if the resource is a local variable which is declared in the same scope.

<VersionNotice />


## Properties

<RuleProperties />
