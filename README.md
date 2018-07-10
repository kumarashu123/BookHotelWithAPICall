This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm start](#npm-start)
- [Schema create](#Create required table)
- [Node Service](#Runing Node service)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm install` and

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Database
Mysql database is required.
Database login username and password is root.

## Create Database

create database name as `test`

## Create needed MySql Table

## Table Member

CREATE TABLE `tbl_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` bigint(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


## Table Hotel

CREATE TABLE `tbl_hotel` (
  `h_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `total_room` int(11) NOT NULL,
  `photo_url` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY(`h_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
## Insert data into  tbl_hotel 
 Insert data into tbl_hotel from database.
 
## After signUp you can change is_admin to 1 
so member details will be displayed for admin users.
 
## Running Node Server

Got to server folder and run node server

 `node index.js`

