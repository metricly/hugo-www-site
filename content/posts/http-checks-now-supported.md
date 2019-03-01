+++
author = "Lawrence Lane"
date = "2018-08-31T13:44:00+00:00"
title = "HTTP Checks Now Supported on Windows Agent"
tags = ["Product Updates"]
url = "/http-checks-now-supported-on-windows-agent/"
+++

Metricly's Windows Agent now offers support for HTTP Checks. You can configure HTTP checks to send an `HTTP GET` request to a URL; if a successful response is returned, then a check is sent to Metricly. These checks allow you to monitor URLs, create policies around their responses, and receive alerts when a check fails.

By default, no HTTP checks are configured---but setting them up is easy.

#### How to Add HTTP Checks

Checks for the Windows Agent can be found and maintained in `C:/Program Files (x86)/CollectdWin/conf/ReadSystemChecks.conf` or `C:/Program Files/CollectdWin/conf/ReadSystemChecks.conf` (depending on the version of windows).

1.  Navigate to your `ReadSystemChecks.config` file found in your Windows Agent folder.
2.  Insert something like this example check:

    ```json
        <HttpCheck Name="MyTestHTTPCheck" Url="http://www.google.com" StatusMatches="^(?!4|5)" />
    ```

3.  The file should then look something like this:
    ```json
        <ReadSystemChecks EnableAgentHeartbeat="true" HeartbeatTTLMultiplier="2.5">
            <Checks>
                <HttpCheck Name="MyTestHTTPCheck" Url="http://www.google.com" StatusMatches="^(?!4|5)" />
            </Checks>
        </ReadSystemChecks>
    ```

4.  Save the file.

##### More Settings

For a full list of available settings you can configure for each HTTP Check, see our [Checks help article](https://www.metricly.com/support/events/checks). These settings include things such as authorization headers (HTTPS), status matches, and time-to-live multipliers.

#### HTTP Checks & Policies

Once you have created an HTTP Check, you can also create a policy to alert on its response using the [Policy Editor](https://www.metricly.com/support/events/policies/policy-editor-2). For example, a policy can be set up to alert when your HTTP Check is not receiving a 200 status code.

#### Updating the Windows Agent

Want to utilize the new HTTP Checks feature? You can update your Windows Agent by visiting our [agent repository](https://repos.app.netuitive.com/windows-agent/index.html).
