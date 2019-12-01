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

router.get('/:id', async (req, res) => {
    const post = Post.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
      });
    res.render('post', {
        post
    });
})

module.exports = router;