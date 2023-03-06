const mongoose = require('mongoose');
MONGO_URL =
  ' mongodb+srv://sajeewa:sajeewa1234@sajeewacluster.aabhgdf.mongodb.net/employeeManagement?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || MONGO_URL);
    // console.log(`MongoDB Connected :💥 ${conn.connection.host}`.cyan.underline);
    console.log(`MongoDB Connected💥`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
