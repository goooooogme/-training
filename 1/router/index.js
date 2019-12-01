const {Router} = require('express');
const router = Router();
const Post = require('../model/post')

router.get('/', async (req, res) => {
    const post = await Post.find();
    console.log(post)

    res.render('index', {
        post
    });
})

module.exports = router;