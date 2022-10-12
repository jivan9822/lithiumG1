const router = require('express').Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;