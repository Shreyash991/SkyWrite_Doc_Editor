const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb+srv://shreyashthakre1999:sthakre@shreyash.q5dld.mongodb.net/DocApp?retryWrites=true&w=majority&appName=Shreyash');

const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', docSchema);