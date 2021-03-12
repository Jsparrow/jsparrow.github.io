---
title: Use Optional::map
ruleId: OptionalMap
since: 3.13.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    Extracts an Optional::map from the consumer used in Optional::ifPresent. 
    This makes complicated code blocks easier to read and reuse.

tags: ["Java 8", "Coding Conventions", "Lambda", "Readability"]
---

# Use Optional::map

## Description

Extracts an `Optional::map` from the consumer used in `Optional::ifPresent`. 
This makes complicated code blocks easier to read and reuse.

## Benefits

Arguably, the lambda expression is easier to read and can be combined with other `Optional` operations.


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

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::

## Properties

<RuleProperties />
