const { isEmpty } = require("lodash");
const { UserModel, userSchema } = require("../models/userModel");
const generateRandomPassword = require("../utils/generateRandomPassword");
const sendEmail = require("../utils/sendEmail");

const saveUser = async (req, res) => {
  try {
    const { value, error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const exist = await UserModel.find({ email: value.email });
    if (!isEmpty(exist)) {
      return res
        .status(409)
        .json({ message: "User with same email already Exist." });
    }
    const userPassword = generateRandomPassword();

    value.password = userPassword;

    const user = new UserModel(value);

    await user.save();
    sendEmail(
      value.email,
      "Password",
      `<b>Hello!</b> Your Ropstam Password is ${userPassword}`
    );
    res.json({ message: "User created password sent to your email." });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.saveUser = saveUser;
