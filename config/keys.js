if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: "mongodb+srv://root:root@cluster0.ejiy0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
}else{
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
}

