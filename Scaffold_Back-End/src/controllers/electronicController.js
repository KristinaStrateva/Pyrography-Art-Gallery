const router = require('express').Router();

const { checkAuthentication } = require('../middlewares/authMiddleware');

const electronicManager = require('../managers/electronicManager');
const extractErrorMessage = require('../utils/extractErrorMessage');

router.get('/catalog', async (req, res) => {
    try {
        const electronics = await electronicManager.getAllElectronics();
        const hasElectronics = electronics.length;

        res.render('electronics/catalog', { electronics, hasElectronics });

    } catch (error) {
        res.redirect('/404', { error: extractErrorMessage(error) });
    }
});

router.get('/:partId/details', async (req, res) => {
    try {
        const electronic = await electronicManager.getElectronicById(req.params.partId).lean();
        const isOwner = req.user?._id == electronic.owner._id;
        const isBought = electronic.buyingList.find(x => x.user._id == req.user?._id);

        res.render('electronics/details', { electronic, isOwner, isBought });

    } catch (error) {
        res.redirect('/electronics/catalog', { error: extractErrorMessage(error) });
    }
});

router.get('/create', checkAuthentication, async (req, res) => {
    res.render('electronics/create');
});

router.post('/create', checkAuthentication, async (req, res) => {
    const {
        name,
        type,
        production,
        exploitation,
        damages,
        image,
        price,
        description
    } = req.body;

    try {
        await electronicManager.create({ name, type, production, exploitation, damages, image, price, description, owner: req.user._id });

        res.redirect('/electronics/catalog');

    } catch (error) {
        res.render('electronics/create', {
            error: extractErrorMessage(error),
            name,
            type,
            production,
            exploitation,
            damages,
            image,
            price,
            description
        });
    }
});

router.get('/:partId/edit', checkAuthentication, async (req, res) => {
    try {
        const {
            name,
            type,
            production,
            exploitation,
            damages,
            image,
            price,
            description
        } = await electronicManager.getElectronicById(req.params.partId).lean();

        res.render('electronics/edit', { name, type, production, exploitation, damages, image, price, description });

    } catch (error) {
        res.redirect(`/electronics/${req.params.partId}/details`, { error: extractErrorMessage(error) });
    }
});

router.post('/:partId/edit', checkAuthentication, async (req, res) => {
    const {
        name,
        type,
        production,
        exploitation,
        damages,
        image,
        price,
        description
    } = req.body;

    try {
        await electronicManager.update(req.params.partId, { name, type, production, exploitation, damages, image, price, description, owner: req.user._id });

        res.redirect(`/electronics/${req.params.partId}/details`);

    } catch (error) {
        res.render('electronics/edit', { error: 'Unsuccessfully updated electronic!', name, type, production, exploitation, damages, image, price, description });
    }
});

router.get('/:partId/delete', checkAuthentication, async (req, res) => {
    try {
        await electronicManager.delete(req.params.partId);

        res.redirect('/electronics/catalog');

    } catch (error) {
        res.redirect(`/electronics/${req.params.partId}/details`, { error: 'Unsuccessfully deleted electronic part!' });
    }
});

router.get('/:partId/purchase', checkAuthentication, async (req, res) => {
    try {
        const user = req.user._id;
        const electronic = await electronicManager.getElectronicById(req.params.partId);

        electronic.buyingList.push({ user });

        electronic.save();

        res.redirect(`/electronics/${req.params.partId}/details`);

    } catch (error) {
        res.redirect(`/electronics/${req.params.partId}/details`, { error: extractErrorMessage(error) });
    }
});

module.exports = router;