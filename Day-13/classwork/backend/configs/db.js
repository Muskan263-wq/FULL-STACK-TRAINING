const mongoose = require("mongoose");

const connection =mongoose.connect("mongodb+srv://muskan40358:muskan2305552@cluster0.3kj3jvq.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0")

module.exports={
    connection
}