const express= require("express")
const router = express.Router()
const initialVideoController = require("../controllers/initialVideoController")

router.post("/", initialVideoController.createInitialVideo)
router.put("/:id", initialVideoController.updateInitialVideo)
router.delete("/:id", initialVideoController.deleteInitialVideo)

module.exports = router