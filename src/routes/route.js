const express = require('express');

const helper = require('../util/helper.js')
const Module = require('../logger/logger.js')
const formatter = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // console.log('this is commited by Amit' + externalModule.electric)
    
    // helper.log()
    // console.log(month);
    helper.date1();

    helper.month1();

    Module.welcome();

    formatter.Lower();

    formatter.upper();
    
    formatter.trim1();

    helper.getBatchinfo();

    // res.send('My first upperCase' + formatter.Upper)
    res.send('This assignment of Today')
});



module.exports = router;
// adding this comment for no reason