# E-commerce Back End Starter Code

## Cloned from repo
https://github.com/coding-boot-camp/fantastic-umbrella

## Description
This is a backend application for an ecommerce site that uses Express JS and Sequelize to interact with a MySQL database. Using insomnia, a user can interact with the backend database to view products, categories, and tags as well as CRUD (Create Read Update Delete) to interact with said databse.

## Table of Contents
  * [Installation](#installation)
  * [Instructions](#instructions)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

## Installation
- Copy repository and install mysql2, Insomnia, and sequelize

## Usage

- Open Develop folder in mysql commandline:
```terminal
msyql -u root -p
```
- Enter Password if applicable
```terminal
source db/schema.sql
```
then
```terminal
use ecommerce_db
```
Then quit MySQL shell and input the following in your terminal

```terminal
npm run seed
```
and finally,
```terminal
node server.js
```

## Walkthrough Video


## License 
This project is licensed under MIT
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Questions
Contact me via my github: https://github.com/codelearning2021