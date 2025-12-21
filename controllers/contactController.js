const asyncHandler = require('express-async-handler')

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc create new contacts
//@route POST /api/contacts
//@access Public
const createContacts = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);

  //destructuring assignment
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ message: "Create new contacts" });
});

//get contacts by ID
//@route POST /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: ` Get contact for ${req.params.id}` });
});

//update contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: ` Update contact for ${req.params.id}` });
});

//DELETE contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: ` Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
