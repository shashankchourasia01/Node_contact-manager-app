const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js");

// @route   GET /api/contacts  and POST /api/contacts

router.route("/").get(getContacts).post(createContacts);

// Get contacts, update and delete  by ID
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


//exporting the router
module.exports = router;
