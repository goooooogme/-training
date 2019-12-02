const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const app = express();

const index = require('./router/index');
const addpost = require('./router/addpost');
const addcategory = require('./router/addcategory');
const login = require('./router/login')
const varMiddleware = require('./middleware/variables');

const MONGODB_URI = 'mongodb+srv://nefedov:183264@cluster0-wcn4h.mongodb.net/blog';

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

const store = new MongoStore({
    collection: 'sessions',
    uri: MONGODB_URI
})


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(varMiddleware);

app.use('/', index);
app.use('/addpost', addpost);
app.use('/addcategory', addcategory);
app.use('/auth', login);




async function start() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true
        });
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servin is run port to ${PORT}`);
        })
    } catch(e) {
        console.log(e);
    }
}

start();

