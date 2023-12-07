const dotenv = require('dotenv');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const postRouter = require('./routers/PostRouter');

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URL;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

//router
app.use('/', postRouter);

//connect mongodb
mongoose
    .connect(URI)
    .then(() => {
        console.log('Connect to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Connect mongoose error: ' + error.message);
    });
