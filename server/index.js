import express from 'express';
import { config } from 'dotenv';

import authRouter from './router/authRouter.js'

config();

const port = process.env.PORT

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.send('Hello world!!')
    } catch (err) {
        console.error(err.message);
    }
});

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})