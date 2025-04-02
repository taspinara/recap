import User from "../models/user.js";

export const createUser = async (req, res) => {
    try {
        const { user_name, email } = req.body;
        const user = await User.create({ user_name, email });
        // res.send(user_name, email);
        res.status(201).json(user);
    } catch (error) {
        console.log(error.message);
    }
}