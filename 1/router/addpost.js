const {Router} = require('express');
const router = Router();
const Post = require('../model/post')

router.get('/', (req, res) => {
    res.render('addpost');
})

router.post('/', (req, res) => {
    const {title, messagePrev, messageFull} = req.body;
    const post = new Post({
        title,
        messagePrev,
        messageFull
    })

    post.save();
    res.redirect('/');
})

module.exports = router;