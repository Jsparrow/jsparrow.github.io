---
title: Profiles
---
# Profiles

In jSparrow, profiles are used to group a set of rules.
While there are pre-defined profiles (marked with *[built-in]*), custom profiles may be created as well.

jSparrow offers the following functions regarding profiles:

[[toc]]

## Creating profiles

jSparrow allows for grouping sets of rules into profiles. Follow these steps to create a profile:

1. Navigate to "Window" -> "Preferences" -> "jSparrow" and click on "New Profile..."

[ ![jSparrow preferences](/img/eclipse/jsparrow_preferences.png) ](/img/eclipse/jsparrow_preferences.png)

2. Select the corresponding rules and a name for the new profile and click on "Finish"

[ ![Create profile](/img/eclipse/jsparrow_create_profile.png) ](/img/eclipse/jsparrow_create_profile.png)

## Editing profiles

The custom profiles can be modified as follows:

1. Navigate to "Window" -> "Preferences" -> "jSparrow"

2. Select the corresponding profile and click "Edit Profile..."

[ ![Edit profile](/img/eclipse/jsparrow_edit_profile.png) ](/img/eclipse/jsparrow_edit_profile.png)

## Setting the default profile

The default profile determines which profile is first selected when opening the "Select Rules" dialog (see [Usage of the Plugin](/eclipse/getting-started.html#usage-of-the-plugin)).

1. Navigate to "Window" -> "Preferences" -> "jSparrow"

2. Just select the corresponding profile and click on "Use As Default Profile"

[ ![Select default profile](/img/eclipse/jsparrow_select_default_profile.gif) ](/img/eclipse/jsparrow_select_default_profile.gif)

## Exporting profiles

jSparrow allows for exporting profiles into `yml` files.
To export a profile: 

1. Navigate to "Window" -> "Preferences" -> "jSparrow".

2. Select a profile to export and click "Export Profile(s)...".

3. Select the output directory and enter the file name.

4. Click "OK". A dialog shows the path to the generated file. 

The generated `yml` file contains the list of the rules in the selected profile and the default configuration values for the rules that require an initial configuration. 
The exported profile can also be used by the [jSparrow Maven Plugin](/maven/getting-started.html#usage).

## Importing profiles

jSparrow allows for importing profiles form `yml` files. 
To Import a profile: 

1. Navigate to "Window" -> "Preferences" -> "jSparrow".

2. Click "Import Profile(s)...".

3. Find the location of the file to be imported and click "OK".

4. A dialog shows the name of the imported profile. 

5. Click "Apply" to persist the imported profile in the Eclipse' preferences. 

See also [this page](/maven/getting-started.html#usage) for the `yml` syntax of jSparrow profiles.