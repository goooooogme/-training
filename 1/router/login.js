const {Router} = require('express');
const router = Router();
const User = require('../model/user');

router.get('/login', (req, res) => {
    res.render('auth/login');

})

router.post('/login', async (req,res) => {
    const user = await User.findById('5de49437c06e29430498ce3a')
    req.session.user = user;
    req.session.isAuthenticated = true;
    req.session.save((err) => {
        if (err) {
            throw err
        }
        res.redirect('/');
    })

})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
    
})

module.exports = router;