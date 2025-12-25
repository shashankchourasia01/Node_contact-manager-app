const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id})
  res.status(200).json(contacts);
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
  const contact = await Contact.create({
    name,
    email,
    phone,
  })
  res.status(201).json(contact);
});

//get contacts by ID
//@route POST /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Errorr('Contact not found')
  }
  res.status(200).json(contact);
});

//update contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Errorr('Contact not found')
  }

  const updatedContacts = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContacts);
});

//DELETE contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Errorr('Contact not found')
  }
  await Contact.remove();
  res.status(200).json({ message: ` Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
