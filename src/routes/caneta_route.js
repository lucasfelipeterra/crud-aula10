const express = require("express");
const caneta_controller = require("../controllers/caneta.js");
const router = express.Router();

router.post("/", caneta_controller.store);

router.get("/", caneta_controller.index);

router.get("/:id", caneta_controller.show);

router.put("/:id", caneta_controller.update);

router.delete("/:id", caneta_controller.destroy);

module.exports = router;
