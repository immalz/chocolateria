const { Router } = require('express')

const router = Router();

router.get('/donde-comprar', (req, res) => {
    res.render('Donde-comprar')
})

module.exports = router;