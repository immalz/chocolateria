const { Router } = require('express')

const router = Router();

router.get('/catalogo', (req, res) => {
    res.render('Catalogo')
})

module.exports = router;