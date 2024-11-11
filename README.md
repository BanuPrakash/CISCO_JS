# REACT
Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; 

banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/CISCO_JS

Softwares Required:

Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

*********

Contents :
1) NodeJS and Webpack
2) React components: class components and functional components
3) React hooks, router-dom, Context
4) State Management with Redux/RTK

=================================

Rendering: data to presentation

Server Side rendering:
On web server we have engines like php/servlet/.net ... which is going to convert data to presentation.
Presentation page is sent to client.
Pros:
1) Faster
2) SEO

Cons:
1) Can't have heterogenous clients. Every client should understand to  proces HTML/PDF [like Browsers]
2) server and client code is coupled
3) heavy payload

Client side rendering:
On web server we have engines like php/servlet/.net ... which is going to convert data to representation like JSON / XML.
JSON / XML is sent to client which is coverted into presentation by applications running on client machine.

Pros:
1) client server logic seperation
2) clients can evolve seperatly
3) less payload

Cons:
1) Slower if not handled properly
2) Not SEO
http://amazon.com/mobiles/iPhone
3) clients are heavy

==================================

Client side rendering in web applications:
1) JS and DOM; DOM helps in creating elements, removing, traverse, adding events
let btn = document.createElement("button");
let page = document.getElementById("page");
page.appendChild(btn);

2) jQuery: simplifies DOM handling
let btn = $(<button/>);
let page = $("#page");

3) Templates: Mustache, Handlebars, Underscore, Knockout, jQueryTemplate, Pug, Jade, EJS, ...

underscore template:
```
<%
    products.forEach(p => {
        <div class="card">
            <div class="card-header">
                <%- p.name %>
            </div>
        </div>
    })
%>
```

4) SPA: Single Page Application
one html page with many views, state mangement, different URLs should display different views.
MVC architecture was preffered to build web application
Model View and Controller
4.1) Backbone: Library with Model and Controller support, View we could use any of above template

Around 2011
4.2) AngularJS: Framework --> total MVC support --> Google
Around 2011
4.3) Facebooks --> XHP [XML in PHP] -> FaxJS -> reactJS [open source]
Khan Academy ReactJS / Netflix

React is just a View Library
4.4) Angular Framework: rectified flaws in AngularJS especially in Digest and apply cycle.
4.5) Vue / Svelete

=================================

JS code --> JS engine for execution.
JS engines:
1) V8 engine --> Google --> Chrome / NODEJS
2) Rhino 
3) SpiderMonkey --> Firefox
4) Continnum --> Edge
5) JavaScriptVM --> Safari
6) Nashorn --> Oracle products
..

NodeJS:
Platform with V8 JS engine and libuv library for Asynchronous APIs
libuv, a platform abstraction library with focus on asynchronous i/o.

file.js
```
    console.log("Hello");


    setTimeout(function timer() {
        console.log("timer code!!!");
    }, 0);

    setTimeout(function timed() {
        console.log("timed!!!");
    }, 1000);

    Promise.resolve(console.log("Done p1"));
    Promise.resolve(console.log("Done p2"));
    
    console.log("Bye");
````

Thread: timer should be called after 0ms

```
setTimeout: TimerThread(timed, 1000, queue);

class TimerThread extends Thread {
    TimerThread(Method m, long delay, CallbackQueue queue){
        ...
    }

    public void run() {
        Thread.sleep(delay);
        queue.push(m);
    }
}
```

Promise API:
for asyncnronus execution of code. generally to make API calls.
Each Promise runs on seperate thread.

Promise states:
pending --> fullfilled state
pending --> rejected state

Event loop: like an infinite while(true) loop
1) check if stack is empty
2) empty micro task queue
3) empty macro task queue
4) wait



