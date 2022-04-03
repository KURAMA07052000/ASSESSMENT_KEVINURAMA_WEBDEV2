const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public');
app.use(express.static(public));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/Login.html'));
})

app.use(function (req, res) {
    res.status(404);
    res.send('Oops! We didn\'t find what you are looking for.');
})
app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
}) 