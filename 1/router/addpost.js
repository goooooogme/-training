const {Router} = require('express');
const router = Router();
const Post = require('../model/post');
const Category = require('../model/category');
const auth = require('../middleware/auth');


router.get('/', auth, async (req, res) => {
    const category = await Category.find();
    res.render('addpost', {
        category
    });
})

router.post('/', auth, (req, res) => {
    const {title, messagePrev, messageFull,category} = req.body;
    const post = new Post({
        title,
        messagePrev,
        messageFull,
        category
    })
    try {
        post.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;