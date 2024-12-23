var mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb+srv://shreyashthakre1999:sthakre@shreyash.q5dld.mongodb.net/DocApp?retryWrites=true&w=majority&appName=Shreyash');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    username: String,
    isBlocked: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
