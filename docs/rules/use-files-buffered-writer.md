---
title: Use Files.newBufferedWriter
ruleId: UseFilesBufferedWriter
since: 3.22.0
minJavaVersion: 7
remediationCost: 5
links:
    - displayName: "Buffered I/O Methods for Text Files"
      url: "https://docs.oracle.com/javase/tutorial/essential/io/file.html#writeBufferedStream"
    
description:
    Java 7 introduced the 'java.nio.file.Files' class that contains some convenience methods for operating on files. This rule makes use of 'Files.newBufferedWriter' method for initializing 'BufferedWriter' objects to write text files in an efficient non-blocking manner.
tags: ["Java 7", "Performance", "Old Language Constructs", "IO Operations"]
---

# Use Files.newBufferedWriter

## Description

Java 7 introduced the [`Files`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html) class that contains convenience methods for operating on files. 
This rule makes use of the [`Files.newBufferedWriter`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#newBufferedWriter(java.nio.file.Path,%20java.nio.charset.Charset,%20java.nio.file.OpenOption...)) method for initializing [`BufferedWriter`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedWriter.html) objects to write text files in an efficient non-blocking manner.

## Benefits

Achieve better performance by using non-blocking I/O operations offered by the [`java.nio`](https://docs.oracle.com/javase/7/docs/api/java/nio/package-summary.html) package.

## Code Changes

### Creating the BufferedWriter from a new FileWriter

__Pre__
```java
String location = "path/to/file";
BufferedWriter bw = new BufferedWriter(new FileWriter(location));
```

__Post__
```java
String location = "path/to/file";
BufferedWriter bw = Files.newBufferedWriter(Paths.get(location), Charset.defaultCharset());
```

### Creating the FileWriter from a new File

__Pre__
```java
String location = "path/to/file";
BufferedWriter bw = new BufferedWriter(new FileWriter(new File(location)));
```

__Post__
```java
String location = "path/to/file";
BufferedWriter bw = Files.newBufferedWriter(Paths.get(location), Charset.defaultCharset());
```

### Declaring the Resources on a Try-With-Resource Statement

__Pre__
```java
try (FileWriter writer = new FileWriter(new File("path/to/file"));
		BufferedWriter bw = new BufferedWriter(writer)) {
    //...
} catch (IOException e) {}
```

__Post__
```java
try (BufferedWriter bw = Files.newBufferedWriter(Paths.get("path/to/file"), Charset.defaultCharset())) {
	// ...
} catch (IOException e) {}
```

### Providing the Charset Manually (Since Java 11)

__Pre__
```java
String location = "path/to/file";
BufferedWriter bw = new BufferedWriter(new FileWriter(location, StandardCharsets.UTF_8));
```

__Post__
```java
String location = "path/to/file";
BufferedWriter bw = Files.newBufferedWriter(Paths.get(location), StandardCharsets.UTF_8);
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::

## Properties

<RuleProperties />
