const { Router } = require("express");
const controllerTarea =  require("../controller/tarea_controller")
const router = Router();


router.get('/info_tarea',controllerTarea.get_tarea);

router.get('/all_tarea',controllerTarea.get_all_tarea);

router.post('/anadir_tarea',controllerTarea.anadir_tarea);

router.put('/editar_tarea',controllerTarea.editar_tarea);

router.delete('/eliminar_tarea',controllerTarea.eliminar_tarea);



module.exports = router;