import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: Date,
  age: Number,
  adresses: [
    {
      type: String,
    },
  ],
  references: [
    {
      name: String,
      phone: String,
    },
  ],
  email: String,
  phone: String,
});

export default mongoose.model("Client", schema);
