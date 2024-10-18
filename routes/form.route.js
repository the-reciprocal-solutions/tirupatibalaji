const router = require("express").Router()
const {formData} = require("../controller/form.controller")

router.post("/",formData)

module.exports = router


