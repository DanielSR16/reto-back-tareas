const { Router } = require("express");
const controllerUser =  require("../controller/user_controller")
const router = Router();


router.get('/login',controllerUser.login);
router.get('/logout',controllerUser.logout);


module.exports = router;