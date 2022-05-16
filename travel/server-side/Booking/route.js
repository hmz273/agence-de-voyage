const express = require("express");
const router = express.Router();""

const { createCommande, updateCommande, removeCommandeById, getCommandeById, getAllCommande, cancelReservation, progressReservation, valideReservation } = require("./booking");
const { userAuth, adminAuth } = require("../middleware/auth");


router.route("/new").post( userAuth, createCommande );
router.route("/:id").put( userAuth, updateCommande);
router.route("/:id").delete( userAuth, removeCommandeById);
router.route("/:id").get( userAuth, getCommandeById);
router.route("/").get( userAuth, getAllCommande);
router.route("/cancel/:id").put ( adminAuth, cancelReservation);
router.route("/progress/:id").put ( adminAuth, progressReservation);
router.route("/valide/:id").put ( adminAuth, valideReservation);

module.exports = router;