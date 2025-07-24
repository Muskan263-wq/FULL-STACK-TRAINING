const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")

const userSignup = async (req, res) => {
    const { name, email, password, phoneNumber, age } = req.body;
    console.log(req.body)
    const userExist = await userModel.findOne({ email });

    if (userExist) {
        return res.status(400).send("user already exist");
    }
    try {
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(400).send("error while hashing");
            } else {
                const user = new userModel({ name, email, password: hash, phoneNumber, age });

                await user.save();
                return res.status(200).send("user data successfully stored in DB");
            }
        });
        // const user=await userModel(name,email,password,phoneNumber,age);

        // await user.save();
        //     res.status(200).send("user data successfully stored in DB");
        //     }
    }
    catch (error) {
        return res.status(400).send({ error: error });
    }

}

const Userlogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const userExist = await userModel.findOne({ email });
    console.log(userExist)

    if (!userExist) {
        return res.status(400).send("user does not exist..");
    }
    try {
        bcrypt.compare(password, userExist.password, async (err, result) => {
          const token=  jwt.sign({ userID: userExist._id }, 'RB', { expiresIn: '24h' });

      
            if (!result) {
                return res.status(401).send({ msg: "Error while hasing" })
            } else {
                res.status(200).send({ msg: "User logged in successful",token:token })
            }

        });
    } catch {
        return res.status(400).send({ error: error.message });
    }
}
module.exports = {
    userSignup, Userlogin
}



