# Additional Configuration

## Setup proxy

### Set forwarding in proxy

Configure your proxy to allow to reach the endpoint for our registration and licensing service at:

::: tip License API endpoint
https://go.netlicensing.io/core/v2/rest
:::

::: tip Registration API endpoint
https://amazonaws.com
:::

### Define proxy in eclipse

::: tip Proxy entries
Open Preferences -> General -> Network Connections
:::

It is important that the HTTPS entry is set similar to the following where the Host and Port are replaced according to your proxy settings

[ ![Example proxy entries](/img/eclipse/proxy.png) ](/img/eclipse/proxy.png)

