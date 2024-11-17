const LostAndFound = require('../models/LostAndFound');

// Report a found item
exports.reportFoundItem = async (req, res) => {
  try {
    const { trainNo, date, itemDescription, contactDetails } = req.body;

    const newItem = new LostAndFound({ trainNo, date, itemDescription, contactDetails });
    await newItem.save();

    res.status(201).json({ message: 'Found item reported successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error reporting found item', error });
  }
};

// Search for lost items
exports.searchLostItems = async (req, res) => {
  try {
    const { trainNo, date } = req.body;

    const items = await LostAndFound.find({ trainNo, date });
    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found for the given train number and date' });
    }

    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lost items', error });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    await LostAndFound.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};
