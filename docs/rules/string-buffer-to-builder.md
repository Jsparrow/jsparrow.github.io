---
title: StringBuffer() to StringBuilder()
ruleId: StringBufferToBuilder
since: 2.2.0
minJavaVersion: 5
remediationCost: 2
links:
    - displayName: "S1149"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1149&q=S1149"
    
description:
    This rule changes the type of local variables from 'StringBuffer()' to 'StringBuilder()'.
tags: ["Java 5", "String Manipulation", "Performance"]
---

# StringBuffer() to StringBuilder()

[[toc]]

## Properties

<RuleProperties />


## Description

This rule changes the type of local variables from StringBuffer() to StringBuilder(). The `java.lang.StringBuilder` and the `java.lang.StringBuffer` have exactly the same API and functionality, so it could just be replaced without any effort. The only difference is, that `StringBuffer` uses synchronized methods, which doesn't automatically result in thread safety. In almost all cases, it is recommended to use StringBuilder because no locking and syncing is done. Hence, it's faster. Also the java compiler optimizes strings, which are altered, and replaces them with `StringBuilder`.

## Benefits

When running programs in a single thread, which is generally the case, `StringBuilder` offers performance benefits over StringBuffer. This is due to the fact that `StringBuffer` is synchronized and `StringBuilder` is not. For a reference see [here](https://docs.oracle.com/javase/8/docs/api/index.html?java/lang/StringBuilder.html).



## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
StringBuffer localStringBuffer = new StringBuffer();
```

__Post__
```java
StringBuilder localStringBuffer = new StringBuilder();
```

### Bytecode JDK 1.8

__Pre__
```java
public String original() {
    StringBuffer sb = new StringBuffer();
    sb.append("val1");
    sb.append("val2");
    String result = sb.toString();
    return result;
}
```

```
 0 new #2 <java/lang/StringBuffer>
 3 dup
 4 invokespecial #3 <java/lang/StringBuffer.<init>>
 7 astore_1
 8 aload_1
 9 ldc #4 <val1>
11 invokevirtual #5 <java/lang/StringBuffer.append>
14 pop
15 aload_1
16 ldc #6 <val2>
18 invokevirtual #5 <java/lang/StringBuffer.append>
21 pop
22 aload_1
23 invokevirtual #7 <java/lang/StringBuffer.toString>
26 astore_2
27 aload_2
28 areturn
```

__Post__
```java
public String transformed() {
    StringBuilder sb = new StringBuilder();
    sb.append("val1");
    sb.append("val2");
    String result = sb.toString();
    return result;
}
```

```
 0 new #8 <java/lang/StringBuilder>
 3 dup
 4 invokespecial #9 <java/lang/StringBuilder.<init>>
 7 astore_1
 8 aload_1
 9 ldc #4 <val1>
11 invokevirtual #10 <java/lang/StringBuilder.append>
14 pop
15 aload_1
16 ldc #6 <val2>
18 invokevirtual #10 <java/lang/StringBuilder.append>
21 pop
22 aload_1
23 invokevirtual #11 <java/lang/StringBuilder.toString>
26 astore_2
27 aload_2
28 areturn
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::