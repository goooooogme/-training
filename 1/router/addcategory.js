const {Router} = require('express');
const router = Router();
const Category = require('../model/category');

router.get('/', async (req, res) => {
    

    res.render('addcategory');
});

router.post('/', (req, res) => {
    const category = new Category(req.body);
    category.save();
    res.redirect('/');
})

module.exports = router;