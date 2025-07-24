const { userModel } = require("../models/user.model");
const jwt=require("jsonwebtoken");


const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.send("Invalid token")
    }
    try {
        const decoded = jwt.verify(token, 'RB');

        const userID = decoded.userID;
        const matchedUser = await userModel.findOne({ _id: userID });
        if (matchedUser) {
            req.headers = decoded.userID;
            next();
        } else {
            return res.status(400).send({ msg: "user not authorized" })
        }
    } catch (error) {
        return res.send({ msg: "error.message"})
    }


};

module.exports = {
    auth
}