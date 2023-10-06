const express = require('express');
const cookieParser = require('cookie-parser');
const {v4: uuid} = require('uuid');
const PORT = 5050;
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    let id;
    // res.header('Set-cookie', `userId=${id}`);
    // console.log({cookie1: req.header('Cookie')});
    // console.log({cookie2: req.headers['cookie']});

    // const cookie = req.headers['cookie'];

    const userId = req.cookies('userId');

    // console.log({cookies: req.cookies});
    // console.log({ userId });

    // if (cookie) {
    //     const [key, value] = cookie.split('=');
    //     console.log({ key });
    //     console.log({ value });
    //     id = value;
    // } else {
    //     id = uuid();
    //     res.header('Set-Cookie', `userId=${id}`);
    // }

    res.send('ok! ID: ' + id)
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}...`));