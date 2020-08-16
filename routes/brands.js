const express = require('express');
const router = express.Router();

const brandsHandler = require('./handler/brands');

router.get('/', brandsHandler.getAll);
router.get('/:id', brandsHandler.get);
router.post('/', brandsHandler.create);
router.delete('/:id', brandsHandler.destroy);

module.exports = router;