---
title: Use BufferedReader::lines
description:
    Replaces While-Loops and For-Loops that are using 'BufferedReader::readLine' to iterate through lines of a file by a stream generated with 'BufferedReader::lines'.

tags: ["Java 8", "Lambda", "Loop", "Old Language Constructs"]
---

# Use BufferedReader::lines

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [3.3.0](/eclipse/release-notes.html#_3-3-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 5 min |
| Links                           |       |

## Description
Java 8 introduced [`BufferedReader::lines`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedReader.html#lines--) to generate a stream of elements representing lines in the `BufferedReader`.
This rule, replaces While-Loops and For-Loops that are using `BufferedReader::readLine` to iterate through lines of a file by a stream generated with `BufferedReader::lines`.

## Benefits

Using streams instead of loops improves the readability and makes the code more compact.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### While Loops
__Pre__
```java
try (BufferedReader bufferedReader = new BufferedReader(new FileReader("file.name.txt"))) {			
    String line;
    while((line = bufferedReader.readLine()) != null) {
        consume(line);
    }
}
```

__Post__
```java
try (BufferedReader bufferedReader = new BufferedReader(new FileReader("file.name.txt"))) {			
    bufferedReader.lines().forEach(line -> {
        consume(line);
    });
}
```

### For Loops with initializer
__Pre__
```java
try (BufferedReader bufferedReader = new BufferedReader(new FileReader("file.name.txt"))) {			
    for(String line; (line = bufferedReader.readLine()) != null;) {
        consume(line);
    }
}
```

__Post__
```java
try (BufferedReader bufferedReader = new BufferedReader(new FileReader("file.name.txt"))) {			
    bufferedReader.lines().forEach(line -> {
        consume(line);
    });
}
```

### For Loops without initializer
__Pre__
```java
try (BufferedReader bufferedReader = new BufferedReader(new FileReader("file.name.txt"))) {			
    String line;
    for(; (line = bufferedReader.readLine()) != null;) {
        consume(line);
    }
}
```

__Post__
```java
try (BufferedReader bufferedReader = new BufferedReader(new FileReader("file.name.txt"))) {			
    bufferedReader.lines().forEach(line -> {
        consume(line);
    });
}
```