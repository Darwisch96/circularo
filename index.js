const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Define a route to serve the content of index.html
app.get('/', (req, res) => {
    // Read the content of the index.html file
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            // If there's an error reading the file, return a 500 Internal Server Error
            res.status(500).send('Internal Server Error');
        } else {
            // Set the Content-Type header to indicate that the response contains HTML
            res.setHeader('Content-Type', 'text/html');
            // Send the content of the index.html file as the response body
            res.send(data);
        }
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

