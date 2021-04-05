
if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: "mongodb+srv://dbUser:root123@cluster0.wffz7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\n" +
            "\n",
        secret: 'yoursecret'
    };
}else{
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
}