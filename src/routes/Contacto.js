const { Router } = require('express')

const router = Router();

router.get('/contacto', (req, res) => {
    res.render('Contacto')
})

module.exports = router;