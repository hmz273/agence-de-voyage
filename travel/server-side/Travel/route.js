const express = require("express");
const router = express.Router();

const { createTravel, updateTravel, removeTravelById, getTravelById, getAllTravels } = require("./travel");
const { adminAuth } = require("../middleware/auth");
const upload = require("../Middleware/multer");

router.route("/new").post( adminAuth, upload.array("images", 6), createTravel );
router.route("/:id").put( adminAuth, updateTravel );
router.route("/:id").delete( adminAuth, removeTravelById );
router.route("/:id").get( adminAuth, getTravelById );
router.route("/").get( adminAuth, getAllTravels );

module.exports = router;