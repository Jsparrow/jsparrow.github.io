# Troubleshooting

## jSparrow is already running...

This issue could be caused by an aborted build, where the temporary directory for the virtual jSparrow workspace has not been cleaned up properly. The workspace is located in `<java.io.tmpdir>/temp_jsparrow/`, where `<java.io.tmpdir>` is a default Java system property.
The problem can be resolved by deleting this directory.

## java.lang.OutOfMemoryError: Java heap space
Especially with larger projects, a `java.lang.OutOfMemoryError: Java heap space` could occur.
This means, as the error message suggests, that the allocated heap space is too small.
To increase your Java heap space set the following environment variable:
```bash
$ export MAVEN_OPTS="-Xmx3000m"
```
This option sets the maximum heap space (`-Xmx`) to 3000 MB (`3000m`).

::: tip Note
Depending on your project you might need a smaller or bigger heap space. The default for modern Java Virtual Machines is smaller than 1/4th of the physical memory or 1 GB.
:::