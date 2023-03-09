---
title: Create Temp Files Using Java NIO
ruleId: CreateTempFilesUsingJavaNIO
since: 3.21.0
minJavaVersion: 1.7
remediationCost: 5
links:
    - displayName: "Creating Temporary Files"
      url: https://docs.oracle.com/javase/tutorial/essential/io/file.html#createTempFile
    
description:
    This rule replaces the temporary file creation using 'java.io.File' by the alternative methods defined in 'java.nio.file.Files'.

tags: ["Java 1.7", "Security", "IO Operations", "Marker"]
---

# Create Temp Files Using Java NIO

## Description

According to the documentation of [`File.createTempFile(String, String)`](https://docs.oracle.com/javase/8/docs/api/java/io/File.html#createTempFile-java.lang.String-java.lang.String-), a suitable alternative for creating temporary files in security-sensitive applications is to use [`java.nio.file.Files.createTempFile(String, String, FileAttribute<?>...)`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#createTempFile-java.lang.String-java.lang.String-java.nio.file.attribute.FileAttribute...-). 
The reason behind it is that files created by the latter have more restrictive access permissions.

This rule replaces the temporary file creation using `java.io.File` by the alternative methods defined in `java.nio.file.Files`. Some detailed examples are provided below. 

## Benefits

As mentioned in the [javadocs](https://docs.oracle.com/javase/8/docs/api/java/io/File.html#createTempFile-java.lang.String-java.lang.String-), the key benefit is security.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Creating Temp File with Prefix and Suffix

__Pre__
```java
File file = File.createTempFile("myFile", ".tmp");
```

__Post__
```java
File file = Files.createTempFile("myFile", ".tmp").toFile();
```


### Creating Temp File in a new Parent Directory

__Pre__
```java
File file = File.createTempFile("myFile", ".tmp", new File("/tmp/test/"));
```

__Post__
```java
File file = Files.createTempFile(Paths.get("/tmp/test/"), "myFile", ".tmp").toFile();
```


### Creating Temp File in a Given Parent Directory

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

### Creating Temp File in a `null` Parent Directory

__Pre__
```java
File file = File.createTempFile("myFile", ".tmp", null);
```

__Post__
```java
File file = Files.createTempFile("myFile", ".tmp").toFile();
```

<VersionNotice />
## Properties

<RuleProperties />
