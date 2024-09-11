const express = require("express");
const moto_controller = require("../controllers/moto.js");
const router = express.Router();

router.post("/", moto_controller.store);

router.get("/", moto_controller.index);

router.get("/:id", moto_controller.show);

router.put("/:id", moto_controller.update);

router.delete("/:id", moto_controller.destroy);

module.exports = router;
