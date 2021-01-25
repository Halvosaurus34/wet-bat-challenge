# Wet Bat!

![License](https://img.shields.io/badge/license-MIT-blue.svg "License Badge")

Wet Bat Travel is a coding challenge where I was tasked to make a travel website with a strong fontend and backend. There is a main page with components to view and add quotes to the database.  If you click on 'Pending Quotes' or 'Quotes' it will route to the full quotes page where you can view and delete quotes.  I learned so many things from this fun project.  I can now structure my React code better, connect mySQL to React and I am so much better at CSS than I was before I started this project.

## ✈️ Getting started

####  🐑 Cloning

1. [Fork this repository](https://help.github.com/en/articles/fork-a-repo).
2. [Clone the forked repository](https://help.github.com/en/articles/cloning-a-repository) locally
3. Run `npm install` to install dependencies

## My Process

I started the project by making a github repository. Next I set up mySQL through mySQL workbench and and set up the Node.js server in the repo.  I decided to use Express and Sequelize to handle requests to the server.  After that, I created the react section of the app and started with the nav bar.  I worked through the rest of the website from top to bottom. Once the website was styled to my liking, I connected the frontend to the back end and displayed the database as a list of quotes on the main page and on a seperate quotes page.  Once the connection was made and the website was styled fully, I deployed the website to heroku.  Once the website was deployed, I started on making the website more mobile friendly and fixing all the little issues that arose.

## 💥 Issues

1.  Finding the best way to style the webpage. I started with flexboxes and halfway through I switched to grid (Grid was so much easier to make things evenly spaced while staying responsive).
2.  Finding the best way to render data. I started with useState to store the quote list and ended up using useReducer to try and make the website better at re-rendering the data.
3.  Deploying the website.  I spent a bit of time troubleshooting why my webpage wasnt loading on heroku.  I found out it is because create-react-app adds the build directory to the gitignore file and heroku was unable to see my build folder.

## Things I would add

1. The database needs to be more complex to handle all the requests and different kinds of data
2. Add user authentication
3. Add a search functionality to the webpage
4. Add tour database
5. Add invoicing 

## ❔ Questions:

For questions about this project you can go to my GitHub page at the following link:

- [GitHub Profile](https://github.com/Halvosaurus34)

For additional questions please reach out to me at: lhalvorson34@gmail.com.

---

## 🎯 Links

[Deployed Wet Bat Website](https://shielded-badlands-63088.herokuapp.com/)

---

[Wet Bat GitHub Repository](https://github.com/Halvosaurus34/wet-bat-challenge)

---

I used [Express](https://www.npmjs.com/package/express), [mySQL](https://dev.mysql.com/doc/), [Sequelize](https://sequelize.org/), [Reactjs](https://reactjs.org/), [Nodejs](https://nodejs.org/en/), and [Font-Awesome](https://fontawesome.com/) to build this web app.

---


