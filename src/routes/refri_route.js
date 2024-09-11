const express = require("express");
const refri_controller = require("../controllers/refri.js");
const router = express.Router();

router.post("/", refri_controller.store);

router.get("/", refri_controller.index);

router.get("/:id", refri_controller.show);

router.put("/:id", refri_controller.update);

router.delete("/:id", refri_controller.destroy);

module.exports = router;
