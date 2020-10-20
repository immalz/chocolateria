const { Router } = require('express');
const products = require('../models/Products');

const router = Router();

router.get('/', (req, res) => {
    res.render('Inicio', { products })
})

module.exports = router;