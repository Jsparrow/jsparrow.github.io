---
title: Rename Fields
ruleId: FieldRenaming
since: 2.3.0
minJavaVersion: 1.1
remediationCost: 15
links:
    - displayName: "S116"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS116&q=S116"
    
description:
    Renames the non-final fields to comply with the naming convention "^[a-z][a-zA-Z0-9]*$" i.e. a lower case
    prefix followed by any sequence of alpha-numeric characters
tags: ["Java 1.1", "Coding Conventions", "Readability"]
---

# Rename Fields

[[toc]]

## Properties

<RuleProperties />


## Description

This rule finds the fields that do not comply with the naming conventions and renames them.
According to the Java Naming Conventions, the instance variables, the class variables and the class constants should be named in mixed case with a lower case first letter, i.e. should match the regular expression `"^[a-z][a-zA-Z0-9]*$"`.
Internal words should start with capital letters.
Furthermore, they should not start with underscore `_` or with dollar sign `$` even though both are allowed.

## Benefits

Sharing some naming conventions is a key point to make it possible for a team to efficiently collaborate.
Thus, this rule improves readability, while at the same time helps avoid conflicts and programming errors.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Configuration

The rule provides configuration option for handling the occurrences of underscore `_` and dollar sign `$`.
The user can either choose to convert to uppercase the letter following `_`/`$` or to leave it unchanged.
Note, that in either case occurrences of `$` and `_` will not show up in the new name.
Additionally, the user can choose to rename fields with certain access modifiers, and can also select the search scope for the field references.
The following window with the configuration options will show up every time the user applies the rule to the Java sources.

[ ![Rename fields rule wizard](/img/eclipse/rename_rule_wizard.png) ](/img/eclipse/rename_rule_wizard.png)

When clicking Finish, jSparrow will search for fields (as described above), find their references and will compute the new name.
The changes are shown in a Dif-View and the user can choose to accept or ignore the new name for each field:

[ ![Rename fields preview wizard](/img/eclipse/rename_field_preview_wizard.png) ](/img/eclipse/rename_field_preview_wizard.png)



## Code Changes

__Pre__
```java
class FieldNamingConvention {
    public String a_public_field_sample;
    protected String protected_field;
    String package_private;
    private String private_field;

    public String name$with$$dollar$sign$;

    public String CapitalizedName;
}
```

__Post__
```java
class FieldNamingConvention {
    public String aPublicFieldSample;
    protected String protectedField;
    String packagePrivate;
    private String privateField;

    public String nameWithDollarSign;

    public String capitalizedName;
}
```


## Limitations

A filed cannot be automatically renamed on any of the following condition:

- the newly computed name is not a legal variable name in Java. For example, if the original name is `_int`, the new computed name would be `int` which is a Java keyword and is not allowed to be used as a variable name.
- the newly computed name coincides with any of the existing variable names in the same class.
- the type of the field to be renamed contains a dollar sign. In such a case, the search engine cannot find the references. Therefore, the field is not renamed.

<VersionNotice />

