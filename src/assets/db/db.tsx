




interface CodeBlock {
    type : "code";
    snippet : string;
    language : string;
}

interface TextStyle {
    ml? : number;
    pa?: number;
}

interface HeadingBlock {
  type: "heading";
  text: string;
  style: TextStyle;
}

interface BodyBlock {
  type: "body";
  text: string[];
  style: TextStyle;
}



interface ListBlock {
    type: "list";
    items: string[];
    style: TextStyle;
  }


  type ContentBlock = HeadingBlock | BodyBlock | ListBlock | CodeBlock;

export interface Contents{
    c_ID : number,
    title : string,
    description : string,
    contentBlocks : ContentBlock[];


}


const contentsArray : Contents[] = [
    {
        c_ID: 1,
        title: "Hack Assembler",
        description: "Learn about Hack assembler and how to convert asm code to machine code",
        contentBlocks: [
          {
             type: "heading", 
            text: "Hack Assembler", 
            style: { ml: 0, pa: 0} },
            
          { 
            type: "body", 
            text: [`The Hack Assembler is part of the Nand2Tetris project, which is an educational 
            ramework for building a omputer system from the ground up. The assembler is responsible for translating 
            assembly code into machine code for the Hackcomputer, a simple 16-bit computer designed as part of this course`], 
            style :{} 
          },

          {
            type : "heading", 
          text : "Basics of Hack Assembly Language:", 
          style :{}
          },

          { type: "list", 
            items: ["16-bit Architecture: Instructions are 16 bits long.",
                    "Two Types of Instructions:"], 
            style: {ml : 3} },

            {
                type : "body", 
                text : ["1. A-instructions: Used to set the address in the A register."],
                style : {}
            },

            {
                type : "list",
                items : [
                    "Format: @value where value is either a number (address) or a symbol (label).",
                    "Example: @5 translates to 0000000000000101 in binary."
                ],
                style : {ml : 6}
            }, 

            {
                type : "body",
                text : ["2. C-instructions: Used for computations and memory access."],
                style : {}
            },

            {
                type : "list",
                items : [
                    "Format: dest=comp;jump",
                    "dest (destination) could be M, D, MD, etc.",
                    "comp (computation) is the operation like D+1, M-1, etc.",
                    "jump is the condition like JGT, JEQ, etc.",
                    "jump is the condition like JGT, JEQ, etc."
                ],
                style : {
                    ml : 6
                }
            }, 

            {
                type : "heading",
                text : "Hack Assembly workflow:",
                style :{},
            }, 

            {
                type : "body",
                text : [
                    "1. Parsing: The assembler reads the .asm file line by line, ignoring comments and white spaces.",
                    "2.Symbol Table: Keeps track of variables and labels. The first pass through the code identifies labels, and the second pass resolves variables.",
                    "3. Translation: Each line of assembly code is converted to a 16-bit binary instruction."
                ],
                style : {
                    ml : 0,
                    pa : 1
                }
            }, 

            {
                type : "code",
                snippet : `
  @2
  D=A
  @3
  D=D+A
  @0
  M`,
                language : "asm",
            },

            {
                type : "body",
                text : ["The assembler would convert this to :"],
                style : {
                    pa : 1
                }
            },

            {
                type : "code",
                snippet : `
0x0002
1110001100001000
0x0003
1110000010000010
0x0000
1110000010010000

  `,
                language : "asm"
            }, 

            {
                type : "body",
                text : [
                    "1. Read the Assembly File: Open and parse the .asm file.",
                    "2. First Pass: Record label definitions.",
                    "3. Second Pass: Translate the instructions, handling variables and translating them to binary.",
                    "4. Output the Machine Code: Write the resulting binary code to a .hack file."
                ],
                style : {
                    ml : 1,
                    pa : 1
                }
            }

        ],
      },
      {
        c_ID: 2,
        title: "Basics of Java Programming",
        description: "Learn about Java programming, including its syntax, data types, and core concepts.",
        contentBlocks: [
            {
                type: "heading",
                text: "Introduction to Java",
                style: { ml: 0, pa: 0 }
            },
            {
                type: "body",
                text: ["Java is a versatile, high-level programming language used for building cross-platform applications. It is known for its simplicity, object-oriented structure, and robustness."],
                style: {}
            },
            {
                type: "heading",
                text: "Core Concepts:",
                style: {}
            },
            {
                type: "list",
                items: [
                    "Object-Oriented Programming: Java uses classes and objects to structure code.",
                    "Syntax: Java syntax is similar to C++, making it easier for those familiar with C-based languages.",
                    "Data Types: Java has both primitive types (int, char, etc.) and reference types (arrays, objects)."
                ],
                style: { ml: 3 }
            },
            {
                type: "body",
                text: ["1. Classes and Objects: Classes define the blueprint for objects. Objects are instances of classes."],
                style: {}
            },
            {
                type: "list",
                items: [
                    "Example: class Person { String name; int age; }",
                    "Creating an object: Person p = new Person();"
                ],
                style: { ml: 6 }
            },
            {
                type: "body",
                text: ["2. Inheritance: Java supports inheritance, allowing one class to inherit fields and methods from another."],
                style: {}
            },
            {
                type: "list",
                items: [
                    "Syntax: class SubClass extends SuperClass {}",
                    "Example: class Student extends Person {}"
                ],
                style: { ml: 6 }
            },
            {
                type: "heading",
                text: "Basic Java Program:",
                style: {}
            },
            {
                type: "code",
                snippet: `
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    `,
                language: "java"
            },
            {
                type: "body",
                text: ["This program outputs 'Hello, World!' to the console."],
                style: { pa: 1 }
            }
        ]
    },
    {
        c_ID: 3,
        title: "Introduction to Python Programming",
        description: "Learn the basics of Python programming, including syntax, data structures, and common libraries.",
        contentBlocks: [
            {
                type: "heading",
                text: "Getting Started with Python",
                style: { ml: 0, pa: 0 }
            },
            {
                type: "body",
                text: ["Python is a high-level, interpreted language known for its readability and simplicity. It's widely used for web development, data analysis, and artificial intelligence."],
                style: {}
            },
            {
                type: "heading",
                text: "Core Concepts:",
                style: {}
            },
            {
                type: "list",
                items: [
                    "Syntax: Python uses indentation to define code blocks.",
                    "Data Types: Python has built-in types like int, float, str, and complex.",
                    "Data Structures: Python includes lists, tuples, sets, and dictionaries."
                ],
                style: { ml: 3 }
            },
            {
                type: "body",
                text: ["1. Variables and Data Types: Python allows dynamic typing, meaning you don't have to declare variable types explicitly."],
                style: {}
            },
            {
                type: "list",
                items: [
                    "Example: x = 5 (int), y = 3.14 (float), name = 'Alice' (str)"
                ],
                style: { ml: 6 }
            },
            {
                type: "body",
                text: ["2. Functions: Functions in Python are defined using the 'def' keyword."],
                style: {}
            },
            {
                type: "list",
                items: [
                    "Syntax: def function_name(parameters):",
                    "Example: def greet(name): return f'Hello, {name}!'"
                ],
                style: { ml: 6 }
            },
            {
                type: "heading",
                text: "Basic Python Script:",
                style: {}
            },
            {
                type: "code",
                snippet: `
    def greet(name):
        return f'Hello, {name}!'
    
    print(greet('World'))
    `,
                language: "python"
            },
            {
                type: "body",
                text: ["This script defines a function that greets the user and then prints the result."],
                style: { pa: 1 }
            }
        ]
    },
    {
        c_ID: 4,
        title: "Introduction to React",
        description: "Learn about React and how to build interactive UIs.",
        contentBlocks: [
            {
                type: "heading", 
                text: "Introduction to React", 
                style: { ml: 0, pa: 0 }
            },
            { 
                type: "body", 
                text: [
                    "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
                ], 
                style: {} 
            },
            {
                type: "heading", 
                text: "Core Concepts:", 
                style: {}
            },
            { 
                type: "list", 
                items: [
                    "Component-Based: Build encapsulated components that manage their own state.",
                    "Declarative: React makes it painless to create interactive UIs."
                ], 
                style: { ml: 3 } 
            },
            { 
                type: "body", 
                text: [
                    "1. JSX: A syntax extension for JavaScript that looks similar to XML or HTML."
                ], 
                style: {} 
            },
            { 
                type: "list", 
                items: [
                    "JSX allows you to write HTML elements in JavaScript and place them in the DOM without any `createElement()` or `appendChild()` methods.",
                    "Example: `<h1>Hello, world!</h1>`."
                ], 
                style: { ml: 6 } 
            },
            { 
                type: "body", 
                text: [
                    "2. Components: The building blocks of a React application."
                ], 
                style: {} 
            },
            { 
                type: "list", 
                items: [
                    "Components are JavaScript functions or classes that optionally accept inputs (props) and return React elements that describe what should appear on the screen.",
                    "There are two types of components: Functional Components and Class Components."
                ], 
                style: { ml: 6 } 
            },
            { 
                type: "heading", 
                text: "React Workflow:", 
                style: {}
            },
            { 
                type: "body", 
                text: [
                    "1. Create a React App: Use Create React App to set up a new React project.",
                    "2. Build Components: Break down the UI into components and build each component individually.",
                    "3. Manage State: Use React's state management features to manage the state of your application.",
                    "4. Render the UI: Use ReactDOM to render the components to the DOM."
                ], 
                style: { ml: 0, pa: 1 } 
            },
            { 
                type: "code", 
                snippet: `
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    function App() {
      return <h1>Hello, world!</h1>;
    }
    
    ReactDOM.render(<App />, document.getElementById('root'));
                `,
                language: "javascript" 
            },
            { 
                type: "body", 
                text: [
                    "The code above creates a simple React app that renders 'Hello, world!' to the screen."
                ], 
                style: { pa: 1 } 
            },
            { 
                type: "code", 
                snippet: `
    import React, { useState } from 'react';
    
    function Counter() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    
    ReactDOM.render(<Counter />, document.getElementById('root'));
                `,
                language: "javascript" 
            },
            { 
                type: "body", 
                text: [
                    "This code creates a simple counter component that increments the count each time the button is clicked."
                ], 
                style: { ml: 1, pa: 1 } 
            }
        ]
    },{
        "c_ID": 5,
        "title": "Introduction to Node.js",
        "description": "Learn the basics of Node.js and how to build server-side applications.",
        "contentBlocks": [
            {
                "type": "heading", 
                "text": "Introduction to Node.js", 
                "style": { "ml": 0, "pa": 0 }
            },
            { 
                "type": "body", 
                "text": [
                    "Node.js is an open-source, cross-platform JavaScript runtime environment. It allows developers to use JavaScript to write server-side code and build network applications."
                ], 
                "style": {} 
            },
            {
                "type": "heading", 
                "text": "Core Features:", 
                "style": {}
            },
            { 
                "type": "list", 
                "items": [
                    "Event-Driven: Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
                    "Single-Threaded: Node.js operates on a single thread with event looping, making it scalable for handling multiple connections."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "body", 
                "text": [
                    "1. NPM: The Node Package Manager, a tool that allows you to install and manage libraries or packages."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "NPM enables you to reuse code and manage dependencies in your Node.js applications.",
                    "Example: Installing Express.js using NPM: `npm install express`."
                ], 
                "style": { "ml": 6 } 
            },
            { 
                "type": "body", 
                "text": [
                    "2. Modules: Node.js uses modules to organize code into reusable blocks."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "Modules in Node.js can be built-in, user-defined, or third-party.",
                    "Example: Using the `fs` module to read a file: `const fs = require('fs');`."
                ], 
                "style": { "ml": 6 } 
            },
            {
                "type": "heading", 
                "text": "Building a Simple Server:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "1. Create a server: Use the built-in `http` module to create a simple web server.",
                    "2. Handle Requests: Write functions to handle HTTP requests and send responses.",
                    "3. Listen on a Port: Set the server to listen on a specific port."
                ], 
                "style": { "ml": 0, "pa": 1 } 
            },
            { 
                "type": "code", 
                "snippet": `
        const http = require('http');
        
        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Hello, World!\\n');
        });
        
        server.listen(3000, '127.0.0.1', () => {
          console.log('Server running at http://127.0.0.1:3000/');
        });
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "The code above creates a simple HTTP server that responds with 'Hello, World!' to every request."
                ], 
                "style": { "pa": 1 } 
            }
        ]
    },
    {
        "c_ID": 6,
        "title": "JavaScript Essentials for React",
        "description": "Understand the key JavaScript concepts that are fundamental for working with React.",
        "contentBlocks": [
            {
                "type": "heading", 
                "text": "JavaScript Basics", 
                "style": { "ml": 0, "pa": 0 }
            },
            { 
                "type": "body", 
                "text": [
                    "Before diving into React, it's essential to have a good grasp of JavaScript fundamentals. React relies heavily on JavaScript for building and managing components."
                ], 
                "style": {} 
            },
            {
                "type": "heading", 
                "text": "Key Concepts:", 
                "style": {}
            },
            { 
                "type": "list", 
                "items": [
                    "ES6 Syntax: Modern JavaScript features such as `let`, `const`, arrow functions, and template literals are frequently used in React.",
                    "Destructuring: A convenient way to extract values from arrays or objects and assign them to variables."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "body", 
                "text": [
                    "1. Arrow Functions: A concise way to write functions in JavaScript."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "Arrow functions provide a shorter syntax and lexically bind the `this` value.",
                    "Example: `const add = (a, b) => a + b;`."
                ], 
                "style": { "ml": 6 } 
            },
            { 
                "type": "body", 
                "text": [
                    "2. Spread Operator: Allows for the expansion of arrays or objects into individual elements."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "The spread operator is used to copy or merge arrays and objects.",
                    "Example: `const newArray = [...oldArray, 4, 5];`."
                ], 
                "style": { "ml": 6 } 
            },
            {
                "type": "heading", 
                "text": "Working with React:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "1. Functional Components: The most common way to define components in React, using functions to return JSX.",
                    "2. Hooks: Special functions like `useState` and `useEffect` that let you use state and other React features in functional components."
                ], 
                "style": { "ml": 0, "pa": 1 } 
            },
            { 
                "type": "code", 
                "snippet": `
        import React, { useEffect, useState } from 'react';
        
        function Timer() {
          const [count, setCount] = useState(0);
        
          useEffect(() => {
            const timer = setInterval(() => setCount(count + 1), 1000);
            return () => clearInterval(timer);
          }, [count]);
        
          return <h1>{count} seconds</h1>;
        }
        
        ReactDOM.render(<Timer />, document.getElementById('root'));
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This code creates a timer that counts seconds and updates the display every second."
                ], 
                "style": { "pa": 1 } 
            }
        ]
    },
    {
        "c_ID": 10,
        "title": "JavaScript Fundamentals for React",
        "description": "Understand the essential JavaScript concepts that are crucial for working effectively with React.",
        "contentBlocks": [
            {
                "type": "heading", 
                "text": "JavaScript Basics", 
                "style": { "ml": 0, "pa": 0 }
            },
            { 
                "type": "body", 
                "text": [
                    "Before diving into React, it's important to have a solid understanding of core JavaScript concepts that you'll frequently use in React development."
                ], 
                "style": {} 
            },
            {
                "type": "heading", 
                "text": "ES6 and Beyond:", 
                "style": {}
            },
            { 
                "type": "list", 
                "items": [
                    "Arrow Functions: Concise syntax for writing functions. Example: `const add = (a, b) => a + b;`.",
                    "Template Literals: Use backticks for string interpolation. Example: ``Hello, ${name}``.",
                    "Destructuring: Extract values from arrays or objects into variables. Example: `const { name, age } = person;`."
                ], 
                "style": { "ml": 3 } 
            },
            {
                "type": "heading", 
                "text": "JavaScript Concepts Important for React:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "1. Closures: Functions that can access variables from an outer function even after the outer function has returned."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "Closures are commonly used in React for creating component methods that need access to component state or props.",
                    "Example: A function inside a component that accesses and modifies the component's state."
                ], 
                "style": { "ml": 6 } 
            },
            { 
                "type": "body", 
                "text": [
                    "2. Promises and Async/Await: Handle asynchronous operations. React often interacts with APIs, making promises and async/await crucial."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "Promises represent the eventual completion (or failure) of an asynchronous operation.",
                    "Async/Await provides a way to work with promises using a more readable syntax."
                ], 
                "style": { "ml": 6 } 
            },
            { 
                "type": "body", 
                "text": [
                    "3. Array Methods: Methods like `.map()`, `.filter()`, and `.reduce()` are frequently used in React to manipulate and display data."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "`map()` is often used to render lists of React components.",
                    "`filter()` is used to create a new array with elements that pass a test.",
                    "`reduce()` can be used to accumulate values across an array, such as summing numbers or combining objects."
                ], 
                "style": { "ml": 6 } 
            },
            {
                "type": "heading", 
                "text": "Event Handling in JavaScript:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "React relies heavily on JavaScript event handling. Understanding how events work in vanilla JavaScript is crucial for working with React."
                ], 
                "style": { "ml": 0, "pa": 1 } 
            },
            { 
                "type": "code", 
                "snippet": `
        document.getElementById('myButton').addEventListener('click', function() {
          alert('Button clicked!');
        });
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example shows how to handle a click event in vanilla JavaScript, which lays the foundation for understanding React's event system."
                ], 
                "style": { "pa": 1 } 
            }
        ]
    },
    {
        "c_ID": 11,
        "title": "Using Node.js with React",
        "description": "Learn how to set up a Node.js backend to work seamlessly with your React frontend.",
        "contentBlocks": [
            {
                "type": "heading", 
                "text": "Introduction to Node.js", 
                "style": { "ml": 0, "pa": 0 }
            },
            { 
                "type": "body", 
                "text": [
                    "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to write server-side code using JavaScript, making it a popular choice for building the backend of React applications."
                ], 
                "style": {} 
            },
            {
                "type": "heading", 
                "text": "Setting Up a Node.js Server:", 
                "style": {}
            },
            { 
                "type": "list", 
                "items": [
                    "Install Node.js and npm (Node Package Manager).",
                    "Create a new Node.js project with `npm init`.",
                    "Install Express.js, a web application framework for Node.js."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "body", 
                "text": [
                    "1. Basic Express.js Setup: Use Express.js to set up a basic server that can serve your React application."
                ], 
                "style": {} 
            },
            { 
                "type": "code", 
                "snippet": `
        const express = require('express');
        const app = express();
        const port = 3000;
    
        app.get('/', (req, res) => {
          res.send('Hello World!');
        });
    
        app.listen(port, () => {
          console.log(\`Server is running on http://localhost:\${port}\`);
        });
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This code sets up a simple Node.js server using Express.js that responds with 'Hello World!' when accessed at the root URL."
                ], 
                "style": { "pa": 1 } 
            },
            {
                "type": "heading", 
                "text": "Connecting Node.js with React:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "Once your Node.js server is set up, you can connect it to your React frontend. Common approaches include using RESTful APIs or GraphQL."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "RESTful APIs: Create endpoints in your Node.js server that your React app can interact with.",
                    "GraphQL: Use GraphQL for more flexible queries and better control over data fetching."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "body", 
                "text": [
                    "2. Fetching Data in React: Use `fetch` or `axios` to make HTTP requests to your Node.js server from React."
                ], 
                "style": {} 
            },
            { 
                "type": "code", 
                "snippet": `
        fetch('http://localhost:3000/api/data')
          .then(response => response.json())
          .then(data => console.log(data));
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example demonstrates how to fetch data from a Node.js server in a React component using the `fetch` API."
                ], 
                "style": { "pa": 1 } 
            }
        ]
    },
    {
        "c_ID": 12,
        "title": "React Router: Navigating Between Pages",
        "description": "Master the basics of React Router to handle navigation between different components or pages in your React application.",
        "contentBlocks": [
            {
                "type": "heading", 
                "text": "Introduction to React Router", 
                "style": { "ml": 0, "pa": 0 }
            },
            { 
                "type": "body", 
                "text": [
                    "React Router is a standard library for routing in React. It enables navigation among different components in a React application, allows changing the browser URL, and keeps UI in sync with the URL."
                ], 
                "style": {} 
            },
            {
                "type": "heading", 
                "text": "Setting Up React Router:", 
                "style": {}
            },
            { 
                "type": "list", 
                "items": [
                    "Install React Router using npm: `npm install react-router-dom`.",
                    "Wrap your application in a `BrowserRouter` component.",
                    "Define routes using the `Route` component inside a `Switch` component."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "body", 
                "text": [
                    "1. Basic Routing: Set up basic routing to navigate between different components."
                ], 
                "style": {} 
            },
            { 
                "type": "code", 
                "snippet": `
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    
        function App() {
          return (
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Router>
          );
        }
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example shows how to set up a basic routing structure in a React application using React Router."
                ], 
                "style": { "pa": 1 } 
            },
            {
                "type": "heading", 
                "text": "Navigating Between Routes:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "React Router provides several ways to navigate between routes, such as using the `Link` component or programmatically with `history`."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "Using `Link`: The `Link` component allows users to navigate to a different route by clicking on a link."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "code", 
                "snippet": `
        import { Link } from 'react-router-dom';
    
        function Navbar() {
          return (
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          );
        }
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example demonstrates how to create a navigation menu using `Link` components in React Router."
                ], 
                "style": { "pa": 1 } 
            },
            {
                "type": "heading", 
                "text": "Dynamic Routing:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "React Router allows for dynamic routing, which means routes can be generated dynamically based on the application state."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "Dynamic routes are useful for rendering pages based on URL parameters.",
                    "Example: A route like `/user/:id` can render a user profile based on the `id` parameter."
                ], 
                "style": { "ml": 3 } 
            },
            { 
                "type": "code", 
                "snippet": `
        function App() {
          return (
            <Router>
              <Switch>
                <Route path="/user/:id" component={UserProfile} />
              </Switch>
            </Router>
          );
        }
    
        function UserProfile({ match }) {
          return <h1>User ID: {match.params.id}</h1>;
        }
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example illustrates how to use dynamic routing to render a component based on URL parameters in React Router."
                ], 
                "style": { "pa": 1 } 
            }
        ]
    },
    {
        "c_ID": 13,
        "title": "Managing State with Redux",
        "description": "Learn how to manage global state in your React application using Redux.",
        "contentBlocks": [
            {
                "type": "heading", 
                "text": "Introduction to Redux", 
                "style": { "ml": 0, "pa": 0 }
            },
            { 
                "type": "body", 
                "text": [
                    "Redux is a predictable state container for JavaScript applications. It's most commonly used with React for managing application-wide state."
                ], 
                "style": {} 
            },
            {
                "type": "heading", 
                "text": "Core Concepts of Redux:", 
                "style": {}
            },
            { 
                "type": "list", 
                "items": [
                    "Store: Holds the entire state of your application.",
                    "Actions: Plain JavaScript objects that describe what happened.",
                    "Reducers: Functions that take the current state and an action, then return a new state."
                ], 
                "style": { "ml": 3 } 
            },
            {
                "type": "heading", 
                "text": "Setting Up Redux in a React App:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "1. Install Redux and React-Redux: Use npm to install Redux and the React bindings for Redux."
                ], 
                "style": {} 
            },
            { 
                "type": "list", 
                "items": [
                    "`npm install redux react-redux`."
                ], 
                "style": { "ml": 6 } 
            },
            { 
                "type": "body", 
                "text": [
                    "2. Create a Store: The Redux store holds the entire state tree of your application."
                ], 
                "style": {} 
            },
            { 
                "type": "code", 
                "snippet": `
        import { createStore } from 'redux';
    
        const initialState = { count: 0 };
    
        function counterReducer(state = initialState, action) {
          switch (action.type) {
            case 'INCREMENT':
              return { count: state.count + 1 };
            case 'DECREMENT':
              return { count: state.count - 1 };
            default:
              return state;
          }
        }
    
        const store = createStore(counterReducer);
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example sets up a simple Redux store with a counter reducer that handles increment and decrement actions."
                ], 
                "style": { "pa": 1 } 
            },
            {
                "type": "heading", 
                "text": "Connecting Redux to React:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "Use the `Provider` component from React-Redux to pass the Redux store to your React components."
                ], 
                "style": {} 
            },
            { 
                "type": "code", 
                "snippet": `
        import { Provider } from 'react-redux';
    
        function App() {
          return (
            <Provider store={store}>
              <Counter />
            </Provider>
          );
        }
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example demonstrates how to wrap your React application with the `Provider` component to make the Redux store available to all components."
                ], 
                "style": { "pa": 1 } 
            },
            {
                "type": "heading", 
                "text": "Dispatching Actions and Updating State:", 
                "style": {}
            },
            { 
                "type": "body", 
                "text": [
                    "React components can dispatch actions to update the Redux store. Use `mapDispatchToProps` to define which actions can be dispatched by the component."
                ], 
                "style": {} 
            },
            { 
                "type": "code", 
                "snippet": `
        import { connect } from 'react-redux';
    
        function Counter({ count, increment, decrement }) {
          return (
            <div>
              <h1>{count}</h1>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
            </div>
          );
        }
    
        const mapStateToProps = state => ({ count: state.count });
    
        const mapDispatchToProps = dispatch => ({
          increment: () => dispatch({ type: 'INCREMENT' }),
          decrement: () => dispatch({ type: 'DECREMENT' })
        });
    
        export default connect(mapStateToProps, mapDispatchToProps)(Counter);
                `,
                "language": "javascript" 
            },
            { 
                "type": "body", 
                "text": [
                    "This example shows how to connect a React component to the Redux store, allowing it to display the current state and dispatch actions to update the state."
                ], 
                "style": { "pa": 1 } 
            }
        ]
    }
    
    
    
    
    
]


export default contentsArray