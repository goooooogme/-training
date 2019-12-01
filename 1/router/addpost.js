const {Router} = require('express');
const router = Router();
const Post = require('../model/post');
const Category = require('../model/category');

router.get('/', async (req, res) => {
    const category = await Category.find();
    res.render('addpost', {
        category
    });
})

router.post('/', (req, res) => {
    const {title, messagePrev, messageFull,category} = req.body;
    const post = new Post({
        title,
        messagePrev,
        messageFull,
        category
    })
    console.log(req.body);
    try {
        post.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;