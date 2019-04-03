# Additional Configuration

## Setup Proxy

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
