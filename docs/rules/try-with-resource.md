---
title: Use Try-With-Resource
ruleId: TryWithResource
since: 1.0.0
minJavaVersion: 7
remediationCost: 15
links:
    - displayName: "S2093"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2093&q=S2093"
    
description:
    This rule adds the try-with-resources statement introduced in Java 7. Closing statements are removed as the construct takes care of that.
tags: ["Free", "Java 7", "Old Language Constructs", "Readability", "Marker"]
defaultConfiguration: true
---

# Use Try-With-Resource

## Description

This rule adds the try-with-resources statement introduced in Java 7. Closing statements are removed as
the construct takes care of that.

## Benefits

Applying this rule makes the code safer and more readable.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Moving resource to the try header

__Pre__
```java
try {
    BufferedReader br = new BufferedReader(new FileReader(path));
    br.readLine();
    br.readLine();
    br.close();

} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```

__Post__
```java
try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    br.readLine();
    br.readLine();

} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```


### Moving multiple resources to the try header

__Pre__

```java
try {
    BufferedReader br = new BufferedReader(new FileReader(path));
    BufferedReader br2 = new BufferedReader(new FileReader(path));
    br.readLine();
    br2.readLine();
    br.close();
    br2.close();

} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```

__Post__
```java
try (BufferedReader br = new BufferedReader(new FileReader(path));
        BufferedReader br2 = new BufferedReader(new FileReader(path))) {
    br.readLine();
    br2.readLine();
} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```

### Bytecode JDK 1.8 

__Pre__
```java
public void originalTryWithResource(String path) {
    try {
        BufferedReader br = new BufferedReader(new FileReader(path));
        br.readLine();
        br.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

```
 0 new #2 <java/io/BufferedReader>
 3 dup
 4 new #3 <java/io/FileReader>
 7 dup
 8 aload_1
 9 invokespecial #4 <java/io/FileReader.<init>>
12 invokespecial #5 <java/io/BufferedReader.<init>>
15 astore_2
16 aload_2
17 invokevirtual #6 <java/io/BufferedReader.readLine>
20 pop
21 aload_2
22 invokevirtual #7 <java/io/BufferedReader.close>
25 goto 33 (+8)
28 astore_2
29 aload_2
30 invokevirtual #9 <java/io/IOException.printStackTrace>
33 return
```

__Post__
```java
public void transformedTryWithResource(String path) {
    try(BufferedReader br = new BufferedReader(new FileReader(path))) {
        br.readLine();
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

```
  0 new #2 <java/io/BufferedReader>
  3 dup
  4 new #3 <java/io/FileReader>
  7 dup
  8 aload_1
  9 invokespecial #4 <java/io/FileReader.<init>>
 12 invokespecial #5 <java/io/BufferedReader.<init>>
 15 astore_2
 16 aconst_null
 17 astore_3
 18 aload_2
 19 invokevirtual #6 <java/io/BufferedReader.readLine>
 22 pop
 23 aload_2
 24 ifnull 99 (+75)
 27 aload_3
 28 ifnull 49 (+21)
 31 aload_2
 32 invokevirtual #7 <java/io/BufferedReader.close>
 35 goto 99 (+64)
 38 astore 4
 40 aload_3
 41 aload 4
 43 invokevirtual #11 <java/lang/Throwable.addSuppressed>
 46 goto 99 (+53)
 49 aload_2
 50 invokevirtual #7 <java/io/BufferedReader.close>
 53 goto 99 (+46)
 56 astore 4
 58 aload 4
 60 astore_3
 61 aload 4
 63 athrow
 64 astore 5
 66 aload_2
 67 ifnull 96 (+29)
 70 aload_3
 71 ifnull 92 (+21)
 74 aload_2
 75 invokevirtual #7 <java/io/BufferedReader.close>
 78 goto 96 (+18)
 81 astore 6
 83 aload_3
 84 aload 6
 86 invokevirtual #11 <java/lang/Throwable.addSuppressed>
 89 goto 96 (+7)
 92 aload_2
 93 invokevirtual #7 <java/io/BufferedReader.close>
 96 aload 5
 98 athrow
 99 goto 107 (+8)
102 astore_2
103 aload_2
104 invokevirtual #9 <java/io/IOException.printStackTrace>
107 return
```

<VersionNotice />


## Properties

<RuleProperties />
