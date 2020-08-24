const express = require('express');
const router = express.Router();

const stuffsHandler = require('./handler/stuffs');

router.get('/', stuffsHandler.getAll);
router.get('/:id', stuffsHandler.get);
router.post('/', stuffsHandler.create);
router.delete('/:id', stuffsHandler.destroy);
router.put('/:id', stuffsHandler.update);

module.exports = router;