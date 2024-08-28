const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Stranger Things",
            
        },
        {
            name: "Squid Games",
            
        }
    ])
});

module.exports = router;