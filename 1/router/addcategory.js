const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('addcategory');
});

module.exports = router;