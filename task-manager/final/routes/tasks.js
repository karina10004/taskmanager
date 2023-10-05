const express = require('express')
const router = express.Router();
const {
    getalltasks, 
    createtask,
    updatetask,
    deletetask,
    gettasks
} = require('../controllers/tasks')

router.route('/').get(getalltasks).post(createtask);
router.route('/:id').get(gettasks).patch(updatetask).delete(deletetask);



module.exports = router;
