node app.js
npm init -y
npm install express
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files like images, CSS, and JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'hello.html'));
});

app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sign.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'profile.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'settings.html'));
});

app.get('/start', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'start.html'));
});

app.get('/view-around', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'view-around.html'));
});

app.get('/review-around', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'review-around.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.get('/3dtour', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '3dtour.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'product-detail.html'));
});

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'store.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
