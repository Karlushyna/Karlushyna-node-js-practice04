const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const router = express.Router();

const {validateBody} = require("../../utils");

const {authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user")

//register or signup - use one of variants
router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

//signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;