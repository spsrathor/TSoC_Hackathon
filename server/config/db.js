const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://codfury:shivam123@cluster0.qigq2.mongodb.net/ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
