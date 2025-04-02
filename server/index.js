import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import authRouter from './router/authRouter.js';
import userRouter from './router/usersRouter.js';

config();

const PORT = process.env.PORT

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.send('Hello from the server!!')
    } catch (err) {
        console.log(err.message);
    }
});

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is 🏃 on ${PORT}`);
})