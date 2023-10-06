const express = require('express');
const handlebars = require('express-handlebars');
const path = require("path");
const PORT = 3000;
const app = express();
const { getProducts, addProduct } = require('./products')

// View Engine
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

/* MIDDLEWARE start */

// third party middleware
const bodyParser = express.urlencoded({extended: false});
app.use(bodyParser);

const staticFile = express.static('public');
app.use(staticFile);

// global middleware
app.use((req, res, next) => {
    console.log(`HTTP Request: ${req.method}, Request Path: ${req.path}`);
    next();
})

// partial routing middleware
app.use("/kittens", (req, res, next) => {
    console.log("Kittens Middleware has been invoked!");
    next();
});

// concrete routing middleware
const specificMiddleware = (req, res, next) => {
    console.log("This is the specific routes MIDDLEWARE");
    next(); // next is important
};

/* MIDDLEWARE end */

/** ROUTING start*/ 
// app HTTP methods - get, post, put, patch, delete (the main methods)
app.get("/", (req, res) => {
    //   res.send("Welcome, this is the home page!");
    res.render("home");
});  

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/specific', specificMiddleware, (req, res) => {
    res.send('This is specific route.')
})

// !DO NOT DO THIS!
// app.get('/public/css/style.css">', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public/css', 'style.css'))
// })

// endpoint -> method, path, ACTION
// get - method
// "products" - path, router
// action = (req, res) => {}
app.get('/products', (req, res) => {
    const products = getProducts();
    console.log(products);
    res.render('products', {products});

    // res.send(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <link rel="stylesheet" href="./css/style.css">
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <form method="post">
    //             <label for="name">Name:</label>
    //             <br>
    //             <input type="text" id="name" name="name">
    //             <br>
    //             <label for="age">Age:</label>
    //             <br>
    //             <input type="text" id="age" name="age">
    //             <br><br>
    //             <input type="submit" value="Create Brand">
    //         </form> 
    //     </body>
    //     </html>
    // `)
});

app.get('/products/:productId', (req, res) => {
    const productId = Number(req.params.productId);

    if (!productId) {
        res.status(404).send('Wrong ID: ' + req.params.productId)
        return;
    }
    res.send({id: productId, name: 'Brand' + productId})
})

app.post('/products', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = Number(req.body.age);
    addProduct(name, age);
    res.send('Product has been created.')
});

// Download & Send
app.get("/download-png", (req, res) => {
    // // ? .download ends the stream by itself
    // res.download('./screenshot.png')

    // // ? .attachment - you have to end the stream because you can attach multiple files
    // res.attachment('./screenshot.png')
    // res.end();

    res.sendFile(path.resolve(__dirname, './screenshot.png'));
})

// REDIRECT
app.get('/route-that-will-be-redirected', (req, res) => {
    // res.send('You have been redirected.')
    res.redirect('/products')
})

// WILDCARD *
app.get('*', (req, res) => {
    res.status(400).send('Sorry web page is not found');
})
/** ROUTING end*/ 

// Listening on PORT
app.listen(PORT, () => 
    console.log(`server is running on port: ${PORT}`)
);