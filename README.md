#Choco Lux Project

ChocoLux is a web application designed to manage and displays chocolate products. 
It allows users to browse through a variety of chocolates, add items to their basket and 
perform CRUD operation on the products.

The aim is to demonstrate the development of a data-driven full-stack web application
using MongoDB as the database.



**TECHNOLOGIES USED:**
Express Session: Used for managing user sessions, allowing for authentication and authorization within the application.
Bcrypt: Used for hashing and securely storing user passwords in the database.
Express-Fileupload: Middleware for handling file uploads in Express applications.
Body-Parser: Middleware for parsing incoming request bodies.
BrowserLock: A browser feature that restricts certain actions to prevent accidental data loss.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for schema validation and interacting with the MongoDB database.
MongoDB: A NoSQL database used for storing application data.
Nodemon: A utility that monitors for changes in your Node.js application and automatically restarts the server.
Express: A web application framework for Node.js, used for building the backend of the application.
EJS: Embedded JavaScript templates for generating HTML markup with plain JavaScript.
Virtualenv: A tool to create isolated Python environments, not typically used in Node.js projects.
Dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.


**USAGE:**
The ChocoLux application can be started locally by running the command npm run dev. 
Alternatively, it can be accessed through Git Hub Repository:
https://github.com/AlessandraSalanitri/DataBase_Ass

or the URL created by Cyclic when the app was deployed:
https://odd-blue-frog-gear.cyclic.app


**FEATURES:**
Guest User can view the home page, about page, chocolate products, contact page, login, and sign up.
Logged-In User, in addition to the features available to guest users, can add items to their basket, delete products, and update product information.

**DEVELOPMENT PROCESS:**
The development process involved several stages:

Planning: Defining the purpose and scope of the application, designed page layouts, and outlined content.
Design: Created wireframes to visualize the user interface and user experience.
Development: Implemented the front-end and back-end of the application, including database schema design, route creation, controller implementation, and user authentication.
Testing: Conducted thorough testing to ensure functionality, fix any errors, and handle undesired outcomes.
Deployment: Deployed the application on MongoDB Atlas and hosted the code on GitHub for version control and collaboration.


**DATABASE STRUCTURE:**
MongoDB database collections:

User: Stores user information including email, username, password, and links to their basket.
Basket: Stores the user ID and product IDs of items in the user's basket.
Products: Stores information about chocolate products, including name, price, description, and image path.
This database structure allows for efficient management of user data, product information, and user transactions within the ChocoLux application.
