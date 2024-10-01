const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entry');  

router.post('/api/entry', entryController.createEntry); 
router.get('/api/entry/holder/:id', entryController.getEntriesByHolder); 
router.get('/api/entry/dia', entryController.getEntriesByDay); 
router.post('/api/entry/fechas', entryController.getEntriesByDates); 
router.put('/api/entry/salida/:id', entryController.registerCheckout); 

module.exports = router;
