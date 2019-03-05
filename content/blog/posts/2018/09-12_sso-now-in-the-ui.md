---
author: "Lawrence Lane"
date: "2018-09-12"
title: "SSO Setup Is Now In The UI"
category: "Product Updates"
url: "/sso-now-in-the-ui/"
layout: "single"
---

Now you can setup (and update) SSO from the UI! It's easy and takes only minutes.

### **Setting up SSO**

1.  Navigate to your Account Profile page and select SSO.
2.  Click **Generate**.\
    ![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/09/Generate-SSO-Cert.png)

3.  Copy the generated certificate and use it to create a .cert file.
4.  Add the .cert file to your chosen SSO provider, such as Okta or Onelogin. Your SSO provider then generates a private key for you to upload to Metricly.
5.  Return to the SSO menu in Metricly and upload your key.
6.  Done! You can repeat this process and overwrite your SSO configuration at any time.\
    ![](https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/2018/09/sso-finished.png)

See our [SSO Guide](/support/getting-started/managing-users/sso-login/) to see an example of full setup using Okta.
