---
title: Make SerialVersionUID Static Final 
description:
    Adds the modifiers static and final to SerialVersionUid long variables when they are absent.
---

# Make SerialVersionUID Static Final

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9.2 |
| Minimum Java version            | 1.1     |
| Remediation cost                | 5 min |
| Links                           | [Squid:S2057](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2057&rule_key=squid%3AS2057) |

## Description

Adds the modifiers static and final to SerialVersionUid long variables when they are absent.

## Benefits

For serializable classes the SerialVersionUid should be written explicitly. If the UID changes, that can lead to errors (for example, an object not being able to be deserialized). To avoid those errors, apply this rule.

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
Java 1.1, Coding Conventions
:::

## Code Changes

__Pre__
```java
import java.io.Serializable;

public class TestSerialVersionUidRule {
    private class Test01 implements Serializable {
        /**
         *
         */
        private long serialVersionUID = 1L;
        private long otherField;
        private Object objectField;
    }
    private class Test02 implements Serializable {
        /**
         *
         */
        private long testLong, serialVersionUID = 1L;
    }
}
```

__Post__
```java
import java.io.Serializable;

public class TestSerialVersionUidRule {
    private class Test01 implements Serializable {
        /**
         *
         */
        private static final long serialVersionUID = 1L;
        private long otherField;
        private Object objectField;
    }
    private class Test02 implements Serializable {
        private static final long serialVersionUID = 1L;
        /**
         *
         */
        private long testLong;
    }
}
```