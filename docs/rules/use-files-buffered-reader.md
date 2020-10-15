---
title: Use Files.newBufferedReader
ruleId: UseFilesBufferedReader
since: 3.21.0
minJavaVersion: 7
remediationCost: 5
links:
    - displayName: "Buffered I/O Methods for Text Files"
      url: "https://docs.oracle.com/javase/tutorial/essential/io/file.html#readBufferedStream"
    
description:
    Java 7 introduced the 'java.nio.file.Files' class that contains some convenience methods for operating on files. This rule makes use of 'Files.newBufferedReader' method for initializing 'BufferedReader' objects to read text files in an efficient non-blocking manner.
tags: ["Java 7", "Performance", "Old Language Constructs"]
---

# Use Files.newBufferedReader

[[toc]]

## Properties

<RuleProperties />

## Description

Java 7 introduced the [`Files`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html) class that contains convenience methods for operating on files. 
This rule makes use of the [`Files.newBufferedReader`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#newBufferedReader-java.nio.file.Path-java.nio.charset.Charset-) method for initializing [`BufferedReader`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedReader.html) objects to read text files in an efficient non-blocking manner.

## Benefits

Achieve better performance by using non-blocking I/O operations offered by the `java.nio` package.

## Code Changes

### Creating the BufferedReader from a new FileReader

__Pre__
```java
String location = "path/to/file";
BufferedReader br = new BufferedReader(new FileReader(location));
```

__Post__
```java
String location = "path/to/file";
BufferedReader br = Files.newBufferedReader(Paths.get(location), Charset.defaultCharset());
```

### Creating the FileReader from a new File

__Pre__
```java
String location = "path/to/file";
BufferedReader br = new BufferedReader(new FileReader(new File(location)));

```

__Post__
```java
String location = "path/to/file";
BufferedReader br = Files.newBufferedReader(Paths.get(location), Charset.defaultCharset());
```

### Declaring the Resources on a Try-With-Resource Statement

__Pre__
```java
try (FileReader reader = new FileReader(new File("path/to/file"));
		BufferedReader br = new BufferedReader(reader)) {
    //...
} catch (IOException e) {}
```

__Post__
```java
try (BufferedReader br = Files.newBufferedReader(Paths.get("path/to/file"), Charset.defaultCharset())) {
    //...
} catch (IOException e) {}
```

### Providing the Charset Manually (Since Java 11)

__Pre__
```java
String location = "path/to/file";
BufferedReader br = new BufferedReader(new FileReader(location, StandardCharsets.UTF_8));
```

__Post__
```java
String location = "path/to/file";
BufferedReader br = Files.newBufferedReader(Paths.get(location), StandardCharsets.UTF_8);
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::