# expressknex
A project to demonstrate how to connect html to express and use knex for database migration

# Clone
Clone the project `git clone https://github.com/LarryKiniu/expressknex.git` on your terminal/cmd

# Install dependencies
Install the global dependency (knex) by running the command `npm install knex -g` on your terminal/cmd  
Install the project dependencies by running `npm install` or in case you are using yarn `yarn` on your terminal/cmd

# Database
Create the database `expess-knex` in mysql.  
Recreate the database with the most current changes (migrations) by running `npm run migrate` or `yarn migrate`
To create a new table or update exisiting column just run `knex migrate:make <your_table_name>`  
Follow the [Knex migrations tutroial](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261) to learn how to add table columns  
To use Knex - you need a `knexfile.js`in the root of your project

# Run the app
To run the app, run `node index.js` on your terminal/cmd

# Learn
Follow the comments on the code to know how to connect express to frontend html and javascript

# References
- [Express](https://expressjs.com/en/starter/hello-world.html)
- [Express serving static files](https://expressjs.com/en/starter/static-files.html)
- [Linking Javascript in html](https://www.w3schools.com/tags/att_script_src.asp)
- [Sending forms through Javascript](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Processing form data in Express](https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm)
- [How to redirect to another page in Javascript](https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage)
- [Knex](https://knexjs.org/)
- [Knex migrations tutroial](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
- [Knex migrations documentation](https://knexjs.org/#Migrations)