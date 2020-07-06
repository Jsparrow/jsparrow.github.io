---
title: Organize Imports
ruleId: OrganizeImports
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 1
links:
    - displayName: "S1128"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1128&q=S1128"
    
description:
    Organize Imports according to the Eclipse's built in Organize Imports functionality.
tags: ["Free", "Java 1.1", "Readability"]
---

# Organize Imports

[[toc]]

## Properties

<RuleProperties />


## Description

Organizes the imports of a Java class. Removes unused imports and applies an alphanumeric order.   

## Benefits

Imports that are not used are optimized away by the compiler. Regardless, they clutter up the file and might lead to confusion. Removing unused imports and applying alphanumeric order improves readability and maintainability.    


## Code Changes

__Pre__

``` java
package at.splendit.simonykees.sample.preRule;
import java.util.ArrayList;
import java.util.Locale;
import java.util.List;
import java.util.stream.*;
import org.apache.commons.lang3.StringUtils;
public class OrganiseImportsRule {
    public String a(String s) {
        return StringUtils.upperCase(s, Locale.CANADA_FRENCH);
    }
    public String b(String s) {
        List<String> list = new ArrayList<>();
        list.add(s);
        return list.get(list.indexOf(s));
    }
}
```

__Post__

``` java
package at.splendit.simonykees.sample.postRule.allRules;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import org.apache.commons.lang3.StringUtils;
public class OrganiseImportsRule {
    public String a(String s) {
        return StringUtils.upperCase(s, Locale.CANADA_FRENCH);
    }
    public String b(String s) {
        List<String> list = new ArrayList<>();
        list.add(s);
        return list.get(list.indexOf(s));
    }
}
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::