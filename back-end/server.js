const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true, useUnifiedTopology: true});

const db= mongoose.connection;
db.on('error', (error)=> console.log('error'));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());
const quoteRouter = require('./routes/quote');
app.use('/',quoteRouter);

app.use('/', (req,res)=> {
    res.send('Hello World');
}
)
