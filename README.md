# ResultManagementSystem

This project contains two parts:
 * First folder is NodeServer, which is for the backend and API calls.
 * Second folder is ResultManagementSystem, which is an Angular application.

## Software Requirements
To run this software, following softwares should be installed on your machine:
* NodeJS
* Angular
* MongoDB

## How to run?

To run the application, It is needed to run both folders.  

* First, run the Node Application (NodeServer). To run it, first install all the dependencies by running the command `npm i` (To install the all packages). After that, use the command `npm run dev`.

* After that, run the Angular App (ResultManagementSystem). To run it, install all the dependencies by running the command `npm i`. After that, use the command `ng serve -o`.

* When both folders started running, then you'll need a teacher credentials for start working with this application. For teacher credentials, see the last lines (Before `app.listen`) of `app.js` of NodeServer folder. There, you'll get some lines of code for a teacher object and how to save that teacher object into the database as commented. Uncomment that part and restart the server (If you are using Nodemon to run the server then just uncomment the commented part and save the code). The teacher object will get saved into the database with mentioned credentials. With those credentials, you can start using the application.

* Whenever, you want to add new teacher into the database then you'll need to contact database administrator. i.e., you can't add new teachers from user layer. For adding new teachers, you'll need to do it from database level. 