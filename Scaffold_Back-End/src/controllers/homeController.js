const router = require('express').Router();

const electronicManager = require('../managers/electronicManager');
const extractErrorMessage = require('../utils/extractErrorMessage');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/404', (req, res) => {
    res.render('404');
});

router.get('/search', async (req, res) => {
    try {
        const searchResult = await electronicManager.getAllElectronics();
        const isNotEmpty = true;

        res.render('search', { searchResult, isNotEmpty });

    } catch (error) {
        res.redirect('/404', { error: extractErrorMessage(error) });
    }
});

router.post('/search', async (req, res) => {
    try {
        const { name, type } = req.body;

        const searchResult = await electronicManager.getAllElectronics(name, type);
        const isNotEmpty = searchResult.length;

        res.render('search', { searchResult, isNotEmpty, name, type });

    } catch (error) {
        res.redirect('/search', { error: extractErrorMessage(error) });
    }
});

module.exports = router;