# Additional Configuration

## Setup Proxy

### Set Forwarding in Proxy

Configure your proxy to allow to reach the endpoints for our registration and licensing services at:

::: tip License API endpoint
https://go.netlicensing.io/core/v2/rest
:::

::: tip Registration API endpoint
https://amazonaws.com
:::

### Define Proxy in Eclipse

::: tip Proxy entries
Open Preferences -> General -> Network Connections
:::

It is important that the HTTPS entry is set similar to the following example. The Host and Port have to be replaced according to your proxy settings:

[ ![Example proxy entries](/img/eclipse/proxy.png) ](/img/eclipse/proxy.png)
