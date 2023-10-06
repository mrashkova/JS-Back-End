const express = require('express');
const cookieParser = require('cookie-parser');
const {v4: uuid} = require('uuid');
const PORT = 5050;
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    let id;

    const userId = req.cookies('userId');

    console.log({cookies: req.cookies});
    console.log({ userId });

    if (userId) {
        id = userId;
        console.log(req.session);
    } else {
        id = uuid();
        req.session.secret = 'This is secret'
        res.cookie('userId', id)
    }

    res.send('ok! ID: ' + id)
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}...`));