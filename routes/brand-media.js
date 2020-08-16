const express = require('express');
const router = express.Router();

const brandMediaHandler = require('./handler/brand-media');

router.get('/', brandMediaHandler.getAll);
router.get('/:id', brandMediaHandler.get);
router.post('/', brandMediaHandler.create);
router.delete('/:id', brandMediaHandler.destroy);

module.exports = router;