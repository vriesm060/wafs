# Advantages and disadvantages of single page web apps

Web applications are unwittingly replacing the old desktop applications. They are more convenient to use, they are easy to update, and they are not bound to one device.

There are two main design patterns for web apps: Multi-Page Application (MPA) and Single-Page Application (SPA). Both have their pros and cons.

## Pros

* SPAs are fast, as most resources are only loaded once throughout the lifespan of the application. Only data is transmitted back and forth
* Developing a SPA is simple and streamlined. There is no need to write code to render pages on the server. It is easy to get started because you can usually kick off development without using a server at all
* With a SPa it’s easy to make a mobile application because the developer can reuse the same backend code for web application and native mobile application
* SPAs can cache any local storage effectively. An application sends only one request, stores all data, then it can use this data and it works even offline
* SPAs are designed for a more fluid user experience, especially when the user is interacting a lot with the application
* SPAs work very well with responsive sites

## Cons

* Although with SPAs resources only have to be loaded once, it is slow to download because heavy client frameworks are required to be loaded to the client
* It requires Javascript at all times to be present and enabled. If any user disables Javascript in his or her browser, it won’t be possible to present the application and its actions in a correct way
* Compared to MPAs, SPAs are less secure. Due to Cross-Site Scripting (XSS), it enables attackers to inject client-side scripts into web applications by other users
* With the dynamic loading of modules, it is possible to change states without the browser knowing. This can result in breaking the forward, back, and reload buttons of the browser

## Conclusion

Before deploying a web application, you need to consider the goal of it. If you know you need multiple categories (because, for instance, you run an online shop or publish a lot of other content) — use a multi-page site. If you are sure that your site is appropriate for a pure single-page experience — go for the Single-Page Web App.

## Sources

* https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58
* https://www.dialogtech.com/blog/technically-speaking/technically-speaking-the-pros-and-cons-of-single-page-applications-spas
* https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages
