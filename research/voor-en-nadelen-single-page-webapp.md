# Voor- en nadelen single page webapp

Web applications are unwittingly replacing the old desktop applications. They are more convenient to use, they are easy to update, and they are not bound to one device. And even though users are gently moving from browser-based web applications into the mobile ones, the demand for complex and refined apps is already huge and is still growing. If you are thinking about creating your own application, you’ve probably heard that there are two main design patterns for web apps: multi-page application (MPA) and single-page application (SPA). And of course, both models have their pros and cons.

Before you start turning your idea into the real application, you have to answer a bunch of important questions. To decide what app model is better for you, you should follow content-first approach, which emphasizes the importance of putting your application content before everything else. That’s because content is the main reason for which users will or won’t use the application. And this leads us to the most important questions: what content do you want to present and what content your users will care about the most.

There are many pros and cons of SPA as well as of MPA. I hope that the lines below will clear the differences between these two design patterns and bring you closer to the point where you will know what kind of application fits your idea more. And make your idea about own application come true.

Single-Page Application
A single-page application is an app that works inside a browser and does not require page reloading during use. You are using this type of applications every day. These are, for instance: Gmail, Google Maps, Facebook or GitHub.
 SPAs are all about serving an outstanding UX by trying to imitate a “natural” environment in the browser — no page reloads, no extra wait time. It is just one web page that you visit which then loads all other content using JavaScript — which they heavily depend on.

SPA requests the markup and data independently and renders pages straight in the browser. We can do this thanks to the advanced JavaScript frameworks like AngularJS, Ember.js, Meteor.js, Knockout.js .
 Single-page sites help keep the user in one, comfortable web space where content is presented to the user in a simple, easy and workable fashion.

Pros of the Single-Page Application:
SPA is fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout the lifespan of application. Only data is transmitted back and forth.
The development is simplified and streamlined. There is no need to write code to render pages on the server. It is much easier to get started because you can usually kick off development from a file file://URI, without using any server at all.
SPAs are easy to debug with Chrome, as you can monitor network operations, investigate page elements and data associated with it.
It’s easier to make a mobile application because the developer can reuse the same backend code for web application and native mobile application.
SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline.
Cons of the Single-Page Application:
It is very tricky and not an easy task to make SEO optimization of a Single-Page Application. Its content is loaded by AJAX (Asynchronous JavaScript and XML) — a method of exchanging data and updating in the application without refreshing the page.
UPDATE 27.09.2017: In her comment, Iris Shaffer correctly pointed out that it can be done on server side as well. Indeed, it is easier today than it used to be.
It is slow to download because heavy client frameworks are required to be loaded to the client.
It requires JavaScript to be present and enabled. If any user disables JavaScript in his or her browser, it won’t be possible to present application and its actions in a correct way.
UPDATE 27.09.2017: In her comment, Iris Shaffer has noticed that with isomorphic rendering / server side rendering, you can render the page on the server already. When the initial render is on the server and can be cached, disabling JS would not be a concern for getting a rendered page. Theoretically, that’s right. Obviously you can render on server side. But lack of JS can be a concern for other functionalities. Lots of things can be done in HTML & CSS but from my experience it would be hell to do it this way instead of use JavaScript.
Compared to the “traditional” application, SPA is less secure. Due to Cross-Site Scripting (XSS), it enables attackers to inject client-side scripts into web application by other users.
Memory leak in JavaScript can even cause powerful system to slow down
In this model, back and forward buttons become dysfunctional.
UPDATE 27.09.2017: Nowadays, it’s not an issue anymore.
Multi-Page Application
Multiple-page applications work in a “traditional” way. Every change eg. display the data or submit data back to server requests rendering a new page from the server in the browser. These applications are large, bigger than SPAs because they need to be. Due to the amount of content, these applications have many levels of UI. Luckily, it’s not a problem anymore. Thanks to AJAX, we don’t have to worry that big and complex applications have to transfer a lot of data between server and browser. That solution improves and it allows to refresh only particular parts of the application. On the other hand, it adds more complexity and it is more difficult to develop than a single-page application.

Pros of the Multiple-Page Application:
It’s the perfect approach for users who need a visual map of where to go in the application. Solid, few level menu navigation is an essential part of traditional Multi-Page Application.
Very good and easy for proper SEO management. It gives better chances to rank for different keywords since an application can be optimized for one keyword per page.
Cons of the multiple-page application:
There is no option to use the same backend with mobile applications.
UPDATE 27.09.2017: Back then, when I was writing this article, I didn’t have much experience with backend and with mobile apps. It’s obvious for me now that you can use the same backend for both. And I’d like to thank all the readers who pointed that out.
Frontend and backend development are tightly coupled.
The development becomes quite complex. The developer needs to use frameworks for either client and server side. This results in the longer time of application development.
SPA or MPA?
Before deploying a web application, you need to consider the goal of it. If you know you need multiple categories (because, for instance, you run an online shop or publish a lot of other content) — use a multi-page site. If you are sure that your site is appropriate for a pure single-page experience — go for it. And if you like SPA but can just barely fit everything into a single page, consider the hybrid site instead. This is another way I haven’t mentioned before. A hybrid application takes what is the best in both approaches and try to minimize the disadvantages. It is, in fact, a single page application which uses URL anchors as synthetic pages enabling more in build browser navigation and preference functionality. But this is the topic for another article.

Perhaps in the future, everyone will use Single Page Application model (including a hybrid app), as it seems to bring a lot of advantages. Many apps on the market are migrating towards this model. However, as some projects simply cannot fit into SPA, the MPA model is still vivid.

[Source](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)

In the early days of the Internet, most web sites consisted of largely static pages filled with content but expecting minimal interactions from the end user. As the Internet grew over the past few decades, however, many web sites began seeking ways to interact with their users; creating a more streamlined and fluid user experience for these interactions. To this effect IFrames were created to allow small modules of content to be dynamically loaded without requiring a reload of the entire web page. Shortly after this, the Ajax specification was adopted as an enhanced method of implementing web applications that could maintain their current state while still communicating with a server in the background. This ability to dynamically load content and modify the state of the page without actually requiring a new page to be loaded led into the design of Single-Page Applications, or SPAs.

An SPA is a web application that fits on a single page rather than the more traditional Multi-Page Websites. In an SPA, different content can reside in different ‘states’ of the page, instead of requiring a new page. One modern example of an SPA that many Internet users are familiar with is Gmail. Whether you are switching mailboxes, opening an email, or writing an email, you always remain on the same page: it is merely the content of the page that is updated to reflect the current state of the application. Over the past several years, SPAs have been rapidly growing in popularity, particularly with the advent of newer JavaScript frameworks such as Backbone, Angular, and Ember, which have adopted SPA principles to simplify the creation of scalable Single-Page Applications.

SPAs have certainly become popular for their fluid user experience, but there are still a lot of websites built across multiple pages. When designing a new web application, should you go with a Single-Page Application or a Multi-Page Website, and what factors should be considered? The fact is, there is no perfect answer to that question, and for different companies and different applications, the answer may change. SPAs are designed for a more fluid user experience – especially when the user is interacting with the application – but this becomes significantly less noticeable if the website in question minimizes user interaction. Websites whose focus remains primarily on content consumption (eg. blog sites, news sites, and online encyclopedias) expect very little interaction from the user and may not fully benefit from the advantages of a Single-Page architecture.

Single-Page Applications also present different challenges that developers of Multi-Page Websites may not be looking out for. One primary concern is the additional overhead; by their very nature SPAs tend to be slower on initial page load since they require loading the framework and the application code prior to rendering the required view in the browser. By contrast, a server-loaded application would only have to push the required HTML to the browser. It is possible to speed up the initial page load through caching, optimization, and lazy-loading modules on an as-needed basis, but the speed difference is a small trade-off to consider between the two design models.

There are a couple other potential pitfalls to at least be aware of, although modern frameworks and best practices make it easy to resolve all of these issues. One concern that has been voiced with SPAs is the handling of navigation within the browser. With the dynamic loading of modules, it is possible to change states without the browser knowing, and as a result essentially breaking the forward, back, and reload buttons of the browser. However, this is something which has been resolved in modern browsers with the introduction of the history.pushState() and history.replaceState() methods. Older browsers which do not support these new functions can also easily handle browser navigation through techniques such as hash-based routing.

In the past, there has also been concern with Search Engine Optimization as it related to SPAs, but as SPAs become more common, this has become less and less of an issue. Google is able to fully crawl websites using either the SPA or MPW architecture without any issue, as can many of the more popular search engines. There are likely some search engines that still do not crawl non-static pages, but it is left up to the developers if reaching the audience served by these few limited search engines is crucial enough to offset the user experience benefits inherent in SPAs.

One final concern with adopting SPAs is largely non-technical: considering the legacy code and current developers for an application. Switching an existing web application to a Single-Page architecture is not trivial, and given project timelines, engineering knowledge, and resources, maintaining and enhancing a Multi-Paged Website might be the most efficient solution. For other applications, the more streamlined user experience offered by SPAs might be essential. For each application the intended audience, available developers, and resources have to be individually weighed to determine what architecture makes the most sense.

What about you? Have you used Single Page Applications? Leave a comment with your experiences to start a dialog.

[Source](https://www.dialogtech.com/blog/technically-speaking/technically-speaking-the-pros-and-cons-of-single-page-applications-spas)

Let's look at one of the most popular SPA sites, GMail.

1. SPA is extremely good for very responsive sites:

Server-side rendering is not as hard as it used to be with simple techniques like keeping a #hash in the URL, or more recently HTML5 pushState. With this approach the exact state of the web app is embedded in the page URL. As in GMail every time you open a mail a special hash tag is added to the URL. If copied and pasted to other browser window can open the exact same mail (provided they can authenticate). This approach maps directly to a more traditional query string, the difference is merely in the execution. With HTML5 pushState() you can eliminate the #hash and use completely classic URLs which can resolve on the server on the first request and then load via ajax on subsequent requests.

2. With SPA we don't need to use extra queries to the server to download pages.

The number of pages user downloads during visit to my web site?? really how many mails some reads when he/she opens his/her mail account. I read >50 at one go. now the structure of the mails is almost the same. if you will use a server side rendering scheme the server would then render it on every request(typical case). - security concern - you should/ should not keep separate pages for the admins/login that entirely depends upon the structure of you site take paytm.com for example also making a web site SPA does not mean that you open all the endpoints for all the users I mean I use forms auth with my spa web site. - in the probably most used SPA framework Angular JS the dev can load the entire html temple from the web site so that can be done depending on the users authentication level. pre loading html for all the auth types isn't SPA.

3. May be any other advantages? Don't hear about any else..

these days you can safely assume the client will have javascript enabled browsers.
only one entry point of the site. As I mentioned earlier maintenance of state is possible you can have any number of entry points as you want but you should have one for sure.
even in an SPA user only see to what he has proper rights. you don't have to inject every thing at once. loading diff html templates and javascript async is also a valid part of SPA.
Advantages that I can think of are:

rendering html obviously takes some resources now every user visiting you site is doing this. also not only rendering major logics are now done client side instead of server side.
date time issues - I just give the client UTC time is a pre set format and don't even care about the time zones I let javascript handle it. this is great advantage to where I had to guess time zones based on location derived from users IP.
to me state is more nicely maintained in an SPA because once you have set a variable you know it will be there. this gives a feel of developing an app rather than a web page. this helps a lot typically in making sites like foodpanda, flipkart, amazon. because if you are not using client side state you are using expensive sessions.
websites surely are extremely responsive - I'll take an extreme example for this try making a calculator in a non SPA website(I know its weird).

I am a pragmatist, so I will try to look at this in terms of costs and benefits.

Note that for any disadvantage I give, I recognize that they are solvable. That's why I don't look at anything as black and white, but rather, costs and benefits.

Advantages

Easier state tracking - no need to use cookies, form submission, local storage, session storage, etc. to remember state between 2 page loads.
Boiler plate content that is on every page (header, footer, logo, copyright banner, etc.) only loads once per typical browser session.
No overhead latency on switching "pages".
Disadvantages

Performance monitoring - hands tied: Most browser-level performance monitoring solutions I have seen focus exclusively on page load time only, like time to first byte, time to build DOM, network round trip for the HTML, onload event, etc. Updating the page post-load via AJAX would not be measured. There are solutions which let you instrument your code to record explicit measures, like when clicking a link, start a timer, then end a timer after rendering the AJAX results, and send that feedback. New Relic, for example, supports this functionality. By using a SPA, you have tied yourself to only a few possible tools.
Security / penetration testing - hands tied: Automated security scans can have difficulty discovering links when your entire page is built dynamically by a SPA framework. There are probably solutions to this, but again, you've limited yourself.
Bundling: It is easy to get into a situation when you are downloading all of the code needed for the entire web site on the initial page load, which can perform terribly for low-bandwidth connections. You can bundle your JavaScript and CSS files to try to load in more natural chunks as you go, but now you need to maintain that mapping and watch for unintended files to get pulled in via unrealized dependencies (just happened to me). Again, solvable, but with a cost.
Big bang refactoring: If you want to make a major architectural change, like say, switch from one framework to another, to minimize risk, it's desirable to make incremental changes. That is, start using the new, migrate on some basis, like per-page, per-feature, etc., then drop the old after. With traditional multi-page app, you could switch one page from Angular to React, then switch another page in the next sprint. With a SPA, it's all or nothing. If you want to change, you have to change the entire application in one go.
Complexity of navigation: Tooling exists to help maintain navigational context in SPA's, like history.js, Angular 2, most of which rely on either the URL framework (#) or the newer history API. If every page was a separate page, you don't need any of that.
Complexity of figuring out code: We naturally think of web sites as pages. A multi-page app usually partitions code by page, which aids maintainability.
Again, I recognize that every one of these problems is solvable, at some cost. But there comes a point where you are spending all your time solving problems which you could have just avoided in the first place. It comes back to the benefits and how important they are to you.

[Source](https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages)
