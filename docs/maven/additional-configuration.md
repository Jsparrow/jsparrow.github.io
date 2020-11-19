# Additional Configuration

## Setup Proxy

::: warning Requirements
Proxy settings require at least [version 2.0.1](/maven/release-notes.html#_2-0-1) of the jSparrow Maven plugin.
:::

### Set Forwarding in Proxy

Configure your proxy to allow to reach the endpoint for our licensing service at:

::: tip License API endpoint
https://go.netlicensing.io/core/v2/rest
:::


### Define Proxy for Maven

The proxy for maven can be defined in your Maven's `settings.xml` like this:

```xml
<settings>
  ...
  <proxies>
   <proxy>
      <id>example-proxy</id>
      <active>true</active>
      <protocol>https</protocol>
      <host>proxy.example.com</host>
      <port>8080</port>
      <username>proxyuser</username>
      <password>somepassword</password>
      <nonProxyHosts>www.google.com|*.example.com</nonProxyHosts>
    </proxy>
  </proxies>
  ...
</settings>
```

For further information, have a look at [Configuring a Proxy](https://maven.apache.org/guides/mini/guide-proxies.html)

## Eclipse Formatter File

Via the `-Dformatter=<formatter-file-path>` parameter, jSparrow can be configured to use a custom formatter configuration for the [Reformat Code](/rules/code-formatter.html) rule. 
The `<formatter-file-path>` has to point to a valid Eclipse formatter file.  

### How-to

The easiest way to get a valid Eclipse formatter file is to create it within Eclipse's [_Code Formatter Preferences_](https://help.eclipse.org/2020-09/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fpreferences%2Fjava%2Fcodestyle%2Fref-preferences-formatter.htm) and export it from there via _Export All_. 

Eclipse's _Code Formatter Preferences_ offer countless ways to customize formatting, plus a preview window that showcases all changes. 

[ ![Eclipse Formatter Preferences](/img/maven/eclipse-formatter-preferences.gif) ](/img/maven/eclipse-formatter-preferences.gif)

::: tip Note
_Export All_ will export all self-made formatter profiles and therefore ignore the profiles with the _\[built-in\]_ suffix. 
:::

::: warning Note
In case of multiple self-made formatter profiles, jSparrow will take the first one. Either make sure, the formatter XML file only contains one profile, or that the desired profile comes first. 
:::

### Formatting Settings Similar to IntelliJ IDEA

Eclipse's Code Formatter Preferences offer a vast amount of customizations and make it possible to configure formatting options similar to other IDEs, such as IntelliJ IDEA.
There are subtle differences in the approach how Eclipse and IntelliJ handle formatting though, which makes it impossible to use the exact same formatting in Eclipse, that is default in IntelliJ. 

#### Differences include:
* Chained method calls cannot be excluded from line wrapping
* A lot of parameter alignment options work differently (e.g., try-with-resource cannot have the option "Do not wrap" and "Indent on column" at the same time)
* A lot of comment related formatting works differently (e.g., one-line block comments are not put into separate lines reliably, options to remove blank lines are different, etc.)
* It is not possible to use different line wrapping options depending on the element of an annotation (e.g., "Wrap where necessary" on class annotations but not on local variable annotations)

That being said, [here](https://gist.github.com/luigiwerzowa/bf91b62b6180fa86992f4cb7b7f71429) are formatting settings that are similar to IntelliJ. 