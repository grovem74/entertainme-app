const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/entertainme';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const auth = require('./routes/auth');
const celebrities = require('./routes/celebrities');
const favorites = require('./routes/favorites');
const user = require('./routes/user');
app.use(auth);
app.use(celebrities);
app.use(favorites);
app.use(user);

// app.get("/test", (req, res) => {
//     res.send("message from backend");
// });

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});