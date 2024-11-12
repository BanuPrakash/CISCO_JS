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

===========================

Why NodeJS?
* build APIs
* realtime application
* for streaming
* developing web applications

Developing web applications?
1) we might write code in Latest version of JS/ TypeScript / Dart / CoffeeScript/LiveScript

JS is dynamically typed language
let a = "hello"; //string
a = 10; // number

TypeScript: --> statically typed language
let name:string = "Raj";
name = 10; // tsc error

tsc products.ts --> products.js --> engine for execution

Transcompiler
latest JS 2015 [ES6] --> babel/tracuer --> compatable JS version of target ES5

2) Linting : static code analysis
3) Unit testing, E2E testing
4) Minify and uglify your code
5) bundle the code

```
index.html

<script src="products.js"></script>
<script src="customers.js"></script>
<script src="orders.js"></script>
<script src="payments.js"></script>
```
Issues: 1) too many network calls
2) order matters

Solution:
```
<script src="bundle.js"></script>
```

Understanding of NodeJS project.
1) package.json file where dependencies are configured, scripts are written
2) node_modules folder where dependencies are downloaded into
3) uses CommonJS Module system

Other module systems available: IIFE, CommonJS , System , AMD, ESM (ES6 Module system)

npm init --y

node package managers:
1) npm <<default>>
2) yarn
3) pnpm
4) rush
5) lerna

* downloading dependecies
* publish libraries
* run scripts

npm i lodash
```
 "lodash": "4.17.21" --> exact version
 "lodash": "^4.17.21" --> 4+
 "lodash": "~4.17.21" --> major version has to be 4, minor and patch can change

other team members:
npm install
```

require('lodash'); --> check if its a part of pre-defined NodeJs module, else see it in "node_modules" folder

 node ./src/index.js 

 ============

 HOF: 
 1) functions which can accept function as argument
 2) functions which can return a function

 https://rxmarbles.com/

 filter -> subset
 map --> transform
 reduce --> aggergate
 forEach --> traverse and perform action on each item

 all the above functions are already pre-defined in "array" object in JS

 ===
 Webpack and React concept using Webpack without using react library

HOF type 2: functions which return a function

function adder(base) {
    return function(arg) {
        return base + arg;
    }
}

let fiveAdder = adder(5);
fiveAdder(2); // 5 + 2

closure: function returned from outer function can access all the members of outer function

====================

JS build tools:
1) Grunt
2) gulp
3) Webpack <<default for Angular / React >>
4) Vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.
```
product.ts
tsc product.ts --> product.js

customer.ts
tsc customer.ts --> customer.js
```

steps for webpack:
webpack-example %  npm init --y
webpack-example %  npm i webpack webpack-cli html-webpack-plugin babel-loader @babel/core @babel/preset-env 

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript code that can be run by older JavaScript engines.
https://caniuse.com/

* babel-loader
allows to use ES6 module system instead of CommonJS module system
```
import {filter, map} from './lib'; // ESM
instead of
let {filter, map} = require('./lib'); // CommonJS
```

* file-loader
import 'logo.png';

* css-loader
import './styles.css'

====
```
 babel-loader passes loaded JS file to @babel/core
 @babel/core is the actual transcompiler which tries to convert latest version of JS to downward compatabile version like ES5

  @babel/core uses @babel/preset-env

  @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

Syntax transform:
  
let mobiles = filter(products, product => product.category === 'mobile');

change to:

let mobiles = filter(products, function(product) {
    return product.category === 'mobile'
});

polyfills:
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

Promise is a ES6/ES2015 feature --> not available in ES5 engine
https://github.com/zloirock/core-js

```

Webpack:
```
npm run dev


asset bundle.js 6.47 KiB [emitted] (name: main)
runtime modules 695 bytes 3 modules
cacheable modules 1.6 KiB
  ./src/index.js 801 bytes [built] [code generated]
  ./src/lib.js 583 bytes [built] [code generated]
  ./src/Person.js 252 bytes [built] [code generated]
webpack 5.96.1 compiled successfully in 53 ms

npm run prod
asset bundle.js 693 bytes [emitted] [minimized] (name: main)
orphan modules 835 bytes [orphan] 2 modules
./src/index.js + 2 modules 1.6 KiB [built] [code generated]
webpack 5.96.1 compiled successfully in 149 ms
```
useful in development stage:
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
```
<script src="bundle.js"></script>
```
In projects there could be many bundles.
In development stage bundle.js could be cached by browser

webpack-dev-server: miniature web server good enough for development stage.
React / Angular 

By default it runs on 8080 port
npm i webpack-dev-server

"start": "webpack serve --mode development",

npm start

=======
JSX : JavaScript and XML

@babel/preset-env --> ES2015+ to lower version
@babel/preset-react --> JSX to JS

Handling JSX:
npm i @babel/preset-react

babel.config.js
```
module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

{product.name} is called as interpolation {data to presentation}
-----------------------

Day 1 Recap:

HOF: high order functions
1) functions which accept function as argument
2) function which returns a function --> closure

NodeJs: 
```
platform with V8 JS engine and libuv C/C++ library for async , event loop

nodeJs project: package.json [where scripts and dependencies are configured]
node_modules folder: place where 3rd party dependencies are downloaded into.
```

webpack development tool:
```
* webpack and webpack-cli to use the tool
webpack --mode development
webpack --mode production
--> bundle.js

* babel-loader --> webpack.config.js
whenever we are importing JS files babel-loader loads the file gives it to
@babel/core --> transcompiler to convert higher version of code to lower compatable version for target.
@babel/preset-env: syntax transforms and polyfill

* html-webpack-plugin: automate adding script tags in html to include the bundle.
```

Day 2:
React application development

JSX: JavaScript and XML is not understood by JS engine
step 1:
JSX has to be converted into JS object
@babel/preset-react looks for React object and createElement() method of the object

step 2:
JS object has to be rendered to the target platform [web / mobile / tv / desktop]
varies render's are available

React Components:
Thinking in React:
1) Atoms: basic building blocks such as button, input, image ...
    Most of the time we use 3rd party libraries like react-bootstrap, MUI, adobe spectrum
    to get them.
    Some times we just use low level DOM
2) molecule: grouping of atoms such as Card, panel, ...
many pre-defined molecules are already available with 3rd party libraries

3) Organisms: combining molecules like list of cards, navigation bar
4) Templates: grouping of organisms
5) Pages

-----------

Building React Components:
use react and react-dom libraries
1) React.createElement() low level API to convert JSX to JS
2) functional component: function which returns JSX [99% of components]
3) class component: render() method returns JSX

======================================

class component:
1) extends React.Component [inheritance]
2) can have state and behaviour
3) must have render() method to return  JSX

React version 18 --> needs minimum of NodeJS version 20

Customer application
* customers state
* delete a customer based on ID
* filter customers based on name

npx lodash [ doesn't make any sense]

executable modules --> npx


npx create-react-app customerapp


create-react-app: creates a scaffolding code with "webpack"

```
https://www.jhipster.tech/configuring-a-corporate-proxy/
npm config set proxy http://username:password@host:port
npm config set https-proxy http://username:password@host:port
```
Commands:
```
 "build": "react-scripts build", is similar to

 "build":" webpack --mode production"

"start": "react-scripts start", is same as
"start" : "webpack serve --mode development" --> uses webpack-dev-server on port 3000

```

default entry point for webpack is "src/index.js"

html-webpack-plugin creates a bundle and adds script in public/index.html

```
function add(x, y) {
    return x + y;
}

add(4,5); // 9

function add(x, y) {
    return 
        x + y;
}
add(4,5); // undefined
```

Resume @ 11:15
