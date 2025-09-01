const express = require('express');
const app = express();
app.listen(3000);
app.set('view engine', 'ejs');

// Global variables
app.locals.name = 'Guest'; // Default name before login

// // These will be changed each time the web is deployed
// app.locals.adminIsSet = false; // Default admin credentials status
// app.locals.adminUser = 'admin';
// app.locals.adminPass = 'admin123';

// // Change admin credentials before going to index.html
// if (!app.locals.adminIsSet) {

//     app.use((req, res) => {
//         res.render('login');
//     });
//     app.locals.adminIsSet = true;
// }

// Serves
app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/views/index.html');
    res.render('index');
});

app.get('/about', (req, res) => {
    //res.sendFile(__dirname + '/views/404.html');
    res.render('404');
});

app.get('/WIP', (req, res) => {
    //res.sendFile(__dirname + '/views/WIP.html');
    res.render('WIP');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Redirects
app.get('/index.html', (req, res) => {
    res.redirect('/');
});

// Work In Progress
app.get('/vin-decoder', (req, res) => {
    res.redirect('/WIP');
});

app.get('/search', (req, res) => {
    res.redirect('/WIP');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});