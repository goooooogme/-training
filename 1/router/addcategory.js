const {Router} = require('express');
const router = Router();
const Category = require('../model/category');
const auth = require('../middleware/auth');


router.get('/', auth, async (req, res) => {
    

    res.render('addcategory');
});

router.post('/', auth, (req, res) => {
    const category = new Category(req.body);
    category.save();
    res.redirect('/');
})

module.exports = router;