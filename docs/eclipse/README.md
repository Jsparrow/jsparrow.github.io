# jSparrow Eclipse Plug-In Documentation

## Setup proxy

### Set forwarding in proxy

Configure your proxy to allow to reach the endpoint for our licensing service at

::: tip API endpoint
https://go.netlicensing.io/core/v2/rest
:::

### Define proxy in eclipse

::: tip Proxy entries
Open Preferences -> General -> Network Connections
:::

It is important that the HTTPS entry is set similar to the following where the Host and Port are replaced according to your proxy settings

![Example proxy entries](/img/proxy.png)

#### Test eclipse proxy settings

To test whether the proxy entries are set properly, you can try to open https://go.netlicensing.io/core/v2/rest in the internal Eclipse browser.

::: tip Eclipse Browser
Open Window -> Show View -> Other -> Internal Web Browser
:::

If the site prompts for a username and password, the proxy entries should be correct. 
