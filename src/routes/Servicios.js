const { Router } = require('express')

const router = Router();

router.get('/servicios', (req, res) => {
    res.render('Servicios')
})

module.exports = router;