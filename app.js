const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(passport.initialize());

require('./config/passport')(passport);

const db = require('./config/keys').mongoURL;
mongoose.connect(db, {useNewUrlParser:true}).then(() => {
    console.log(`Datrabse ${db}`)
}).catch(err => console.log(err));

const users = require('./routes/api/users');
app.use('/api/users', users);

app.get('/',(req,res) => {
    res.sendFile(path.join((__dirname, 'public/index.html')))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server start ${PORT}`);
})