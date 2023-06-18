const { isEmpty } = require("lodash");
const { UserModel, userPasswordValidation } = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signIn = async (req, res) => {
  try {
    const { value, error } = userPasswordValidation.validate(req.body);

    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const exist = await UserModel.findOne({
      email: value.email,
      password: value.password,
    });

    if (!isEmpty(exist)) {
      const payload = {
        user: {
          id: exist._id,
        },
      };
      const secret = process.env.SECRET_KEY_JWT;
      const token = jwt.sign(payload, secret);

      return res.status(201).json({ token });
    }

    res.json({ message: "User not exist." });
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
};

module.exports.signIn = signIn;
