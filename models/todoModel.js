const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No user data provided"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  todos: [
    {
      title: {
        type: String,
        required: [true, "No todo data provided"],
        trim: true,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      desc: String,
    },
  ],
});

todoSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

todoSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
