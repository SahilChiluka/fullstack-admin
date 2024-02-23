import mongoose from "mongoose";

const uri = 'mongodb+srv://admin-sahil:Sahilc10@cluster0.d89byi4.mongodb.net/test?retryWrites=true&w=majority'

const connectDb = async() => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
};

export default connectDb;
