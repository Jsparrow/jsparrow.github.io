---
title: Use Files.writeString
ruleId: UseFilesWriteString
since: 3.24.0
minJavaVersion: 11
remediationCost: 5

description:
    This rule makes use of the overloaded static methods 'java.nio.file.Files.writeString' which were introduced in Java 11. 
    With the help of this methods it is possible to write text into a file in an efficient non-blocking manner by one single invocation. 
tags: ["Java 11", "Performance", "Old Language Constructs", "IO Operations", "Marker"]
---

# Use Files.writeString

## Description

Java 11 introduced [`Files.writeString(Path, CharSequence, Charset, OpenOption...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#writeString(java.nio.file.Path,java.lang.CharSequence,java.nio.charset.Charset,java.nio.file.OpenOption...)) and [`Files.writeString(Path, CharSequence, OpenOption...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#writeString(java.nio.file.Path,java.lang.CharSequence,java.nio.file.OpenOption...)) for writing text into a file by one single invocation and in an efficient non-blocking manner. 

This rule replaces `BufferedWriter`s that are used to write a single value into a file, with `Files.write(...)`.

## Benefits

Achieves better performance for writing small files. Additionally, improves readability by removing code clutter. 

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### BufferedWriter Created with FileWriter

__Pre__
```java
try (BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("/home/test/testpath"))) {
  bufferedWriter.write("Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

__Post__
```java
try {
  Files.writeString(Paths.get("/home/test/testpath"), "Hello World!", Charset.defaultCharset());
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

### Specifying Charset in BufferedWriter

__Pre__
```java
try (BufferedWriter bufferedWriter = new BufferedWriter(
    new FileWriter("/home/test/testpath", StandardCharsets.UTF_8))) {
  bufferedWriter.write("Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

__Post__
```java
try {
  Files.writeString(Paths.get("/home/test/testpath"), "Hello World!", StandardCharsets.UTF_8);
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

### BufferedWriter Initialized with Files.newBufferedWriter

__Pre__
```java
try (BufferedWriter bufferedWriter = Files.newBufferedWriter(Paths.get("/home/test/testpath"))) {
  bufferedWriter.write("Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

__Post__
```java
try {
  Files.writeString(Paths.get("/home/test/testpath"), "Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

### Files.newBufferedWriter with Path and Charset

__Pre__
```java
try (BufferedWriter bufferedWriter = Files.newBufferedWriter(Paths.get("/home/test/testpath"),
    StandardCharsets.UTF_8)) {
  bufferedWriter.write("Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

__Post__
```java
try {
  Files.writeString(Paths.get("/home/test/testpath"), "Hello World!", StandardCharsets.UTF_8);
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

### Files.newBufferedWriter with Path, Charset, and OpenOption 

__Pre__
```java
try (BufferedWriter bufferedWriter = Files.newBufferedWriter(Paths.get("/home/test/testpath"),
    StandardCharsets.UTF_8, StandardOpenOption.APPEND)) {
  bufferedWriter.write("Hello World!");
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

__Post__
```java
try {
  Files.writeString(Paths.get("/home/test/testpath"), "Hello World!", StandardCharsets.UTF_8,
      StandardOpenOption.APPEND);
} catch (IOException ioException) {
  logError("File could not be written.", ioException);
}
```

<VersionNotice />

## Properties

<RuleProperties />
