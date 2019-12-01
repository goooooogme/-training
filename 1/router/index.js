const {Router} = require('express');
const router = Router();
const Post = require('../model/post')
const Category = require('../model/category')

router.get('/', async (req, res) => {
    const post = await Post.find();
    const category = await Category.find();
    res.render('index', {
        post,
        category
    });
})

router.get('/view/:id', async (req, res) => {
    const post  = await Post.findById(req.params.id);
    res.render('post', {
        post
    });
})

module.exports = router;