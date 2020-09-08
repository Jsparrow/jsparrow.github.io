---
title: Create Temp Files Using Java NIO
ruleId: CreateTempFilesUsingJavaNIO
since: 3.21.0
minJavaVersion: 1.7
remediationCost: 5
links:
    - displayName: "Create Temporary Files Using Java NIO"
    
description:
    Because temporary files created by methods of the class 'java.nio.file.Files'
    may have more restrictive access permissions compared to files created by methods of 'java.io.File', it is 
    recommended to use the methods of 'java.nio.file.Files' in security-sensitive applications.
tags: ["Java 1.7", "Security"]
---

# Use Parameterized JPA Query

[[toc]]

## Properties

<RuleProperties />

## Description

Because temporary files created by the methods [`java.nio.file.Files.createTempFile(prefix, suffix, attrs)`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#createTempFile-java.lang.String-java.lang.String-java.nio.file.attribute.FileAttribute...-)
and [`java.nio.file.Files.createTempFile(dir, prefix, suffix, attrs))`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#createTempFile-java.nio.file.Path-java.lang.String-java.lang.String-java.nio.file.attribute.FileAttribute...-)
may have more restrictive access permissions compared to files created by the corresponding methods of [`java.io.File`](https://docs.oracle.com/javase/7/docs/api/java/io/File.html), it is recommended to use the methods of the class [`java.nio.file.Files`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html) in security-sensitive applications.

Terefore this rule replaces invocations of [`java.io.File.createTempFile(prefix, suffix)`](https://docs.oracle.com/javase/7/docs/api/java/io/File.html#createTempFile(java.lang.String,%20java.lang.String)) and [`java.io.File.createTempFile(prefix, suffix, directory)`](https://docs.oracle.com/javase/7/docs/api/java/io/File.html#createTempFile(java.lang.String,%20java.lang.String,%20java.io.File)) by the corresponding methods described above.

## Benefits

As mentioned in the [javadocs](https://docs.oracle.com/javase/8/docs/api/java/io/File.html#createTempFile-java.lang.String-java.lang.String-), the key benefit is security.

## Code Changes

### Creating temporary files specifying prefix and suffix

__Pre__
```java
    File file = File.createTempFile("myFile", ".tmp");
```

__Post__
```java
    File file = Files.createTempFile("myFile", ".tmp").toFile();
```


### Creating temporary files specifying prefix, suffix and constructor for parent directory

__Pre__
```java
    File file = File.createTempFile("myFile", ".tmp", new File("/tmp/test/"));
```

__Post__
```java
    File file = Files.createTempFile(Paths.get("/tmp/test/"), "myFile", ".tmp").toFile();
```


### Creating temporary files specifying prefix, suffix and variable for parent directory

__Pre__
```java
	File directory = new File("/tmp/test/");
	File file = File.createTempFile("myFile", ".tmp", directory);
```

__Post__
```java
	File directory = new File("/tmp/test/");
	File file = Files.createTempFile(directory.toPath(), "myFile", ".tmp").toFile();
```

### Creating temporary files specifying prefix, suffix and null for parent directory

__Pre__
```java
    File file = File.createTempFile("myFile", ".tmp", null);
```

__Post__
```java
    File file = Files.createTempFile("myFile", ".tmp").toFile();
```

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::