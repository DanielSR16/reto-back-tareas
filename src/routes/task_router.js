const { Router } = require("express");
const controllerTarea =  require("../controller/task_controller")
const router = Router();


router.get('/info_task',controllerTarea.get_task);

router.get('/all_task',controllerTarea.get_all_task);

router.post('/add_task',controllerTarea.add_task);

router.put('/edit_task',controllerTarea.edit_task);

router.delete('/delete_task',controllerTarea.delete_task);



module.exports = router;