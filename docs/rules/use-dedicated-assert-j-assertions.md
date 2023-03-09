---
title: Use Dedicated AssertJ Assertions
ruleId: UseDedicatedAssertJAssertions
since: 4.7.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S5838"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5838&q=S5838"
description:
    This rule finds AssertJ assertions that can be simplified and replaces them with equivalent dedicated assertions.

tags: ["Java 8", "Testing", "AssertJ", "Coding Conventions", "Readability", "Marker"]
---

# Use Dedicated AssertJ Assertions

## Description

AssertJ contains a rich API for writing specific assertions about different types of objects. 
Making use of the appropriate dedicated methods when writing certain assertions will simplify the test code and improve the corresponding failure messages. 
This rule finds AssertJ assertions that can be simplified and replaces them with equivalent dedicated assertions.  

::: warning Requirements
* AssertJ [3.20.2 - 3.22.x]
:::

## Benefits

Simplifies the test code and improves the assertion failure messages.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Assertions with String methods

__Pre__
```java
assertThat(s1.equals("str-1")).isTrue();
assertThat(s1.equalsIgnoreCase("STR-1")).isTrue();
assertThat(s1.startsWith("str")).isTrue();
assertThat(s1.contains("-")).isTrue();
assertThat(s1.endsWith("1")).isTrue();
assertThat(s1.matches("s.*")).isTrue();
assertThat("".isEmpty()).isTrue();
assertThat("\t  \n     ".isBlank()).isTrue();

assertThat(s1.equals("str-2")).isFalse();
assertThat(s1.equalsIgnoreCase("STR-2")).isFalse();
assertThat(s1.startsWith("---")).isFalse();
assertThat(s1.contains("---")).isFalse();
assertThat(s1.endsWith("2")).isFalse();
assertThat(s1.matches("xx.*")).isFalse();
assertThat(s1.isEmpty()).isFalse();
assertThat(s1.isBlank()).isFalse();
```

__Post__
```java
assertThat(s1).isEqualTo("str-1");
assertThat(s1).isEqualToIgnoringCase("STR-1");
assertThat(s1).startsWith("str");
assertThat(s1).contains("-");
assertThat(s1).endsWith("1");
assertThat(s1).matches("s.*");
assertThat("").isEmpty();
assertThat("\t  \n     ").isBlank();

assertThat(s1).isNotEqualTo("str-2");
assertThat(s1).isNotEqualToIgnoringCase("STR-2");
assertThat(s1).doesNotStartWith("---");
assertThat(s1).doesNotContain("---");
assertThat(s1).doesNotEndWith("2");
assertThat(s1).doesNotMatch("xx.*");
assertThat(s1).isNotEmpty();
assertThat(s1).isNotBlank();
```

### Assertions with List methods

__Pre__
```java
assertThat(stringList.equals(Arrays.asList("str-1", "str-2", "str-3"))).isTrue();
assertThat(stringList.equals(Arrays.asList("str-1", "str-3"))).isFalse();

assertThat(stringList.contains("str-1")).isTrue();
assertThat(stringList.containsAll(Arrays.asList("str-1", "str-2"))).isTrue();
assertThat(stringList.contains("str-5")).isFalse();
```

__Post__
```java
assertThat(stringList).isEqualTo(Arrays.asList("str-1", "str-2", "str-3"));
assertThat(stringList).isNotEqualTo(Arrays.asList("str-1", "str-3"));

assertThat(stringList).contains("str-1");
assertThat(stringList).containsAll(Arrays.asList("str-1", "str-2"));
assertThat(stringList).doesNotContain("str-5");
```

### Assertions with Map methods

__Pre__
```java
assertThat(map.containsKey("key-1")).isTrue();
assertThat(map.containsValue("value-1")).isTrue();
assertThat(map.containsKey("key-2")).isFalse();
assertThat(map.containsValue("value-2")).isFalse();
```

__Post__
```java
assertThat(map).containsKey("key-1");
assertThat(map).containsValue("value-1");
assertThat(map).doesNotContainKey("key-2");
assertThat(map).doesNotContainValue("value-2");
```


### Assertions with File methods

__Pre__
```java
assertThat(directory.isDirectory()).isTrue();
assertThat(directory.isAbsolute()).isTrue();

assertThat(file.exists()).isTrue();
assertThat(file.isFile()).isTrue();
assertThat(file.canRead()).isTrue();
assertThat(file.canWrite()).isTrue();

assertThat(file.isAbsolute()).isFalse();
assertThat(notExistingFile.exists()).isFalse();
```

__Post__
```java
assertThat(directory).isDirectory();
assertThat(directory).isAbsolute();

assertThat(file).exists();
assertThat(file).isFile();
assertThat(file).canRead();
assertThat(file).canWrite();

assertThat(file).isRelative();
assertThat(notExistingFile).doesNotExist();
```

### Assertions with Path methods

__Pre__
```java
assertThat(absolutePath.startsWith(homeDirectory)).isTrue();
assertThat(absolutePath.endsWith(Path.of("pom.xml"))).isTrue();
assertThat(absolutePath.isAbsolute()).isTrue();
assertThat(Path.of("pom.xml").isAbsolute()).isFalse();
```

__Post__
```java
assertThat(absolutePath).startsWith(homeDirectory);
assertThat(absolutePath).endsWith(Path.of("pom.xml"));
assertThat(absolutePath).isAbsolute();
assertThat(Path.of("pom.xml")).isRelative();
```


<VersionNotice />

## Properties

<RuleProperties />
