import express from 'express';
import { config } from 'dotenv';
config();

const port = process.env.PORT

const app = express();

app.get("/", (req, res) => {
    try {
        res.send('Hello world!!')
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})