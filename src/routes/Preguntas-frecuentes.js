const { Router } = require('express')

const router = Router();

router.get('/preguntas-frecuentes', (req, res) => {
    res.render('Preguntas-frecuentes')
})

module.exports = router;