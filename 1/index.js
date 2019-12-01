const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

const index = require('./router/index');
const addpost = require('./router/addpost');
const addcategory = require('./router/addcategory');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/addpost', addpost);
app.use('/addcategory', addcategory);




async function start() {
    try {
        await mongoose.connect('mongodb+srv://nefedov:183264@cluster0-wcn4h.mongodb.net/blog', {
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

