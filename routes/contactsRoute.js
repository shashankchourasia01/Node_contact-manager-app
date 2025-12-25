const express = require("express");
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler.js')
const {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js");

//now use of validate token to all protected routes so the only logged in user or contacts should CRUD operation
router.use(validateToken)

// @route   GET /api/contacts  and POST /api/contacts
router.route("/").get(getContacts).post(createContacts);

// Get contacts, update and delete  by ID
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



//exporting the router
module.exports = router;
