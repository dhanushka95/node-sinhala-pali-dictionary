const express = require('express');
const router = express.Router();
const getDictionaryDataC = require('../Controllers/getDictionaryDataC');
router.post(
    '/get',
    getDictionaryDataC.validateDictionaryGet,
    getDictionaryDataC.dictionaryDataGet
);



module.exports = router;
