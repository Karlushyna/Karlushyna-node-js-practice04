const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const router = express.Router();

const {validateBody} = require("../../utils");

const {schemas} = require("../../models/user")

//register or signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

//signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

module.exports = router;