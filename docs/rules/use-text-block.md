---
title: Use Text Block
ruleId: UseTextBlock
since: 4.3.0
minJavaVersion: 15
remediationCost: 5
links:
    - displayName: "S6126"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS6126&q=S6126"
    
description:
    This rule replaces String concatenation expressions by Text Block String literals which have been introduced in Java 15.
tags: ["Java 15", "Old Language Constructs", "Readability"]
---

# Use Text Block

## Description

Java 15 introduced [Text Blocks](https://openjdk.java.net/jeps/378) to express String literals spanning several lines and significantly reduce the need for escape sequences.

This rule replaces multiline String concatenation expressions with Text Block String literals. 
Thus, removing some boilerplate code and increasing the readability of String expressions.

::: warning Requirements
* Java 15
:::

## Benefits

Reduces the need for escape sequences. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Concatenation of HTML Code

__Pre__
```java
String html = "" +
		"<html>\n" +
		"\t<head>\n" +
		"\t\t<meta charset=\"utf-8\">" +
		"\t</head>\n" +
		"\t<body class=\"default-view\" style=\"word-wrap: break-word;\">\n"+ 
		"\t\t<p>Hello, world</p>\n" + 
		"\t</body>\n"+
		"</html>\n";
```

__Post__
```java
String html = """
		<html>
			<head>
				<meta charset="utf-8">
			</head>
			<body class="default-view" style="word-wrap: break-word;">
				<p>Hello, world</p>
			</body>
		</html>
		""";
```

### Java Code without Missing Line Break at End

__Pre__
```java
String java = "" +
		"		ArrayList<String> list = new ArrayList<>();\n" +
		"		list.add(\"one\");\n" +
		"		list.add(\"two\");\n" +
		"		list.add(\"three\");";
```

__Post__
```java
String java = """
				ArrayList<String> list = new ArrayList<>();
				list.add("one");
				list.add("two");
				list.add("three");\
		""";
```

### Concatenation with Integer Literals

__Pre__
```java
String java = "" + 
		"		int[] intArray = new int[3];\n" + 
		"		intArray[" + 0 + "] = " + 10 + ";\n" + 
		"		intArray[" + 1 + "] = " + 20 + ";\n" + 
		"		intArray[" + 2 + "] = " + 30 + ";\n";
```

__Post__
```java
String java = """
		int[] intArray = new int[3];
		intArray[0] = 10;
		intArray[1] = 20;
		intArray[2] = 30;
""";
```

<VersionNotice />

## Properties

<RuleProperties />
