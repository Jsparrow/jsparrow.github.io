---
title: Replace For-Loop with Stream::collect(Collectors.joining())
ruleId: StringBuildingLoop
since: 2.2.0
minJavaVersion: 5
remediationCost: 10
links:
    - displayName: "S1643"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1643&q=S1643"
    
description:
    This rule refactors the enhanced for loops which are only being used for concatenating the elements of collections or arrays.
tags: ["Java 5", "Java 8", "Loop", "Lambda", "Performance"]
---

# Replace For-Loop with Stream::collect(Collectors.joining())

## Description

This rule refactors the enhanced for loops which are only being used for concatenating the elements of collections or arrays.
If the Java level is at least 8, the whole loop is transformed into a stream and `Stream::collect(Collector)` is used for computing the result.
If the Java level is below 8 and at least 5, then a `StringBuilder` is used instead of the direct concatenation of strings in the loop body.

## Benefits
Strings are immutable objects, so concatenation doesn't simply add the new String to the end of the existing string.
Instead, in each loop iteration, the first String is converted to an intermediate object type, the second string is appended, and then the intermediate object is converted back to a String.
Performing these operations degrades the longer the String is. Using a `StringBuilder` instead increases performance.


## Code Changes

### At least Java 8

__Pre__
```java
List<String> collectionOfStrings = generateStringList(input);
String result = "";
for(String val : collectionOfStrings) {
    result = result + val;
}
```

__Post__
```java
List<String> collectionOfStrings = generateStringList(input);
String result = collectionOfStrings.stream().collect(Collectors.joining());
```

### Below Java 8

__Pre__
```java
List<String> collectionOfStrings = generateStringList(input);
String result = "";
for(String val : collectionOfStrings) {
    result = result + val;
}
```

__Post__
```java
List<String> collectionOfStrings = generateStringList(input);
StringBuilder resultSb = new StringBuilder();
for(String val : collectionOfStrings) {
    resultSb.append(val);
}
String result = resultSb.toString();
```

### Bytecode JDK 1.8

__Pre__
```java
public String original(List<String> values) {
    String result = "";
    for(String val : values) {
        result = result + val;
    }
    return result;
}
```

```
 0 ldc #2
 2 astore_2
 3 aload_1
 4 invokeinterface #3 <java/util/List.iterator> count 1
 9 astore_3
10 aload_3
11 invokeinterface #4 <java/util/Iterator.hasNext> count 1
16 ifeq 53 (+37)
19 aload_3
20 invokeinterface #5 <java/util/Iterator.next> count 1
25 checkcast #6 <java/lang/String>
28 astore 4
30 new #7 <java/lang/StringBuilder>
33 dup
34 invokespecial #8 <java/lang/StringBuilder.<init>>
37 aload_2
38 invokevirtual #9 <java/lang/StringBuilder.append>
41 aload 4
43 invokevirtual #9 <java/lang/StringBuilder.append>
46 invokevirtual #10 <java/lang/StringBuilder.toString>
49 astore_2
50 goto 10 (-40)
53 aload_2
54 areturn
```

__Post__
```java
public String transformed(List<String>values) {
    String result = values.stream().collect(Collectors.joining());
    return result;
}
```

```
 0 aload_1
 1 invokeinterface #11 <java/util/List.stream> count 1
 6 invokestatic #12 <java/util/stream/Collectors.joining>
 9 invokeinterface #13 <java/util/stream/Stream.collect> count 2
14 checkcast #6 <java/lang/String>
17 astore_2
18 aload_2
19 areturn
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::