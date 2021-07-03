// Let's import the express package to make it easier to build a http server
const express = require('express');
// Let's import the body-parser paclage to make it easier for express to get data sent from html forms
const bodyParser = require('body-parser');
// Let's import the multer package to help us with file uploads
const multer = require('multer');
// Let's import a library to allow cross-origin resource sharing
const cors = require('cors');
const upload = multer();
// Initialize our shiny new http server
const app = express();
// Add the body-parser middleware to our http server
// for parsing application/json
app.use(bodyParser.json())
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array()); 
// for cors
app.use(cors());
// Initialize our port variable.
// Our http server will now be accessible on the browser via http://localhost:3000
// If we wanted our server to be available via http://localhost - we would change the port to 80
const port = 3000;
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express
// In our case, we want to serve static files from the public folder
// For our signup page, we would create a signup.html page in the public folder, and once we run our application (node index.js),
// you can see the signup page by going to http://localhost:3000/signup.html
app.use(express.static('public'));

app.post('/registration', (req, res) => {
    // Your form's data is available in req.body
    // Do what you want with the data e.g saving it in the database
    console.log(req.body)
    // Send something to the frontend to indicate that the request was successful
    res.send({success:true, message: 'Signed up'})
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})