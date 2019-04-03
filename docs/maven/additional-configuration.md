# Additional Configuration

## Setup proxy

### Set forwarding in proxy

Configure your proxy to allow to reach the endpoint for our registration and licensing service at:

::: tip License API endpoint
https://go.netlicensing.io/core/v2/rest
:::


### Define proxy for Maven

The proxy for maven can be defined in your maven's `settings.xml` like this:

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

