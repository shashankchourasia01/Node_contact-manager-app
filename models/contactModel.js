const mongoose = require("mongoose");

const contactModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: (true, "Please add the contacts name"),
    },
    email: {
      type: String,
      require: (true, "Please add the email address"),
    },
    phone: {
      type: String,
      require: (true, "Please add the number"),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactModel)