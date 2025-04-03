import User from "../models/user.js";

export const fetchUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.log(err.message);
    }
}