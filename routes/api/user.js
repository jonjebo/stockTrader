const router = require("express").Router();
const userController = require("../../controllers/userController");

// "/api/user"
router.route("/")
    .post(userController.signup);

router.route("/login")
    .post(userController.login);

router.route("/logOut")
    .get(userController.logOut);

router.route("/isLoggedIn")
    .get(userController.isLoggedIn);
module.exports = router;