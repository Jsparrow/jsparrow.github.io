---
title: Reformat Code
description:
    Reformats code according to the coding conventions defined in Eclipse.
tags: ["rule"]
---

# Reformat Code

[[toc]]

## Properties

<TagLinks />

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0)   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 1 min |
| Links                           |  |

## Description

Reformats code according to the coding conventions defined in Eclipse. For example, line breaks will be added if lines are too long. Properly formatted code improves readability and makes collaboration easier.   

## Benefits

Applying this rule improves readability and helps avoid merge conflicts.   

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, Formatting, Readability
:::

## Code Changes

__Pre__

``` java
package at.splendit.simonykees.sample.preRule;
public class CodeFormatterRule {
    public int a( int i ) { i *= 2; return i; }
    public int b( int i ) { if (0 == i) {return 1;} else {return 0;  } }

    /**
     * @param i Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        @return evaluated in
     */
    public  int c( int i ) { return i + 3;}

}
```

__Post__

``` java
package at.splendit.simonykees.sample.postRule.allRules;
public class CodeFormatterRule {
    public int a(int i) {
        i *= 2;
        return i;
    }
    public int b(int i) {
        if (0 == i) {
            return 1;
        } else {
            return 0;
        }
    }
    /**
     * @param i
     *            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
     *            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     *            Ut enim ad minim veniam, quis nostrud exercitation ullamco
     *            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
     *            irure dolor in reprehenderit in voluptate velit esse cillum
     *            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     *            cupidatat non proident, sunt in culpa qui officia deserunt
     *            mollit anim id est laborum.
     * @return evaluated in
     */
    public int c(int i) {
        return i + 3;
    }
}
```
