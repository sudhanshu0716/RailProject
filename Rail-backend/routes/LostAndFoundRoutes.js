const express = require('express');
const router = express.Router();
const {
  reportFoundItem,
  searchLostItems,
  deleteItem,
} = require('../controllers/lostAndFoundController');

// Route to report a found item
router.post('/found', reportFoundItem);

// Route to search for lost items
router.post('/lost', searchLostItems);

// Route to delete an item
router.delete('/:id', deleteItem);

module.exports = router;
