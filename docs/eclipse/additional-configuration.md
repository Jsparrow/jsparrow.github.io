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

### Activating Basic Authentication Scheme in Java

Since [Java 8u111](https://www.oracle.com/technetwork/java/javase/8u111-relnotes-3124969.html), the `Basic` authentication scheme has been deactivated, by default, in the Oracle Java Runtime, by adding `Basic` to the `jdk.http.auth.tunneling.disabledSchemes` networking property. 
If your proxy requires it, the `Basic` authentication scheme can be reactivated by removing `Basic` from the `jdk.http.auth.tunneling.disabledSchemes` networking property: 

```
jdk.http.auth.tunneling.disabledSchemes=
```

In Java 8, this property may be configured in `$JAVA_HOME$/jre/lib/net.properties`. From Java 9 onwards, the path changed to `$JAVA_HOME$/conf/net.properties`. 