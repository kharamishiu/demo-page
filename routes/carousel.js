const express = require('express'),
      router = express.Router();

//load carousel model


//routes

router.get('/new', (req, res) => {
    res.render('carousel/new');
});

router.get('/edit', (req, res) => {
    res.render('carousel/edit');
});


//export route
module.exports = router;