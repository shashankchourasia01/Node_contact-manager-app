//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req,res) => {
    res.status(200).json({message: 'Get all contacts'});
};


//@desc create new contacts
//@route POST /api/contacts
//@access Public
const createContacts = (req,res) => {
    res.status(2001).json({message: 'Create new contacts'});
};


//get contacts by ID
//@route POST /api/contacts/:id
//@access Public
const getContact = ((req,res) => {
    res.status(200).json({message: ` Get contact for ${req.params.id}`});
})

 
//update contacts 
//@route PUT /api/contacts/:id
//@access Public
const updateContact = ((req,res) => {
    res.status(200).json({message: ` Update contact for ${req.params.id}`});
})


//DELETE contacts 
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = ((req,res) => {
    res.status(200).json({message: ` Delete contact for ${req.params.id}`});
})



module.exports = {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact
};