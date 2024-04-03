const express = require('express');
const Memer = require("random-jokes-api");
// Create an Express application 
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/getJoke",(req,res)=>{
    let jokes = Memer.joke();
    res.send(jokes);
})
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});