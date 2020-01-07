---
title: Use Optional::map
description:
    Extracts an Optional::map from the consumer used in Optional::ifPresent. 
    This makes complicated code blocks easier to read and reuse.

tags: ["Java 1.8", "Coding Conventions", "Lambda"]
---

# Use Optional::map

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [3.14.0](/eclipse/release-notes.html#_3-14-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 2 min |

## Description

Extracts an `Optional::map` from the consumer used in `Optional::ifPresent`. 
This makes complicated code blocks easier to read and reuse.

## Benefits

Arguably, the lambda expression is easier to read and can be combined with other `Optional` operations.

## Requirement & Tags

::: warning Requirements
Java 1.8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Base Case

__Pre__
```java
    findById(userId)
        .ifPresent(user -> {
            String email = user.getMail();
            sendMail(email);
        });
```

__Post__
```java
    findById(userId)
        .map(user -> user.getMail())
        .ifPresent(email -> sendMail(email));
```

### Multiple Statements in Lambda Body

__Pre__
```java
    Optional<User> oUser = findById(userId);
    oUser.ifPresent(user -> {
        Address address = user.getAddress();
        sendGiftCard(address);
        sendAds(address);
    });
```

__Post__
```java
    Optional<User> oUser = findById(userId);
    oUser.map(user -> user.getAddress()).ifPresent(address -> {
        sendGiftCard(address);
        sendAds(address);
    });
```


