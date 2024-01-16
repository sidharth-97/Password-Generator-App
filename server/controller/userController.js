const userModel = require("../model/userModel.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (user) {
    res.status(401).json("Email already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      email,
      password: hashedPassword,
      name,
    });
    console.log(newUser);
    res.status(200).json("Signup successfull");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        req.session = req.session || {};
      req.session.user = user._id
      console.log(req.session.user)
      res.status(200).json("Login success");
    }
  } else {
    res.status(401).json("Signup successfull");
  }
};

const logout = async (req, res) => {
  console.log(req.session.user);
  if (req.session) {
    req.session.destroy();
    res.status(200).json("Logged out successfully");
  } else {
    console.error('Session does not exist.');
    res.status(401).json("Session does not exist.");
  }
};


module.exports = {
  signup,
  login,
  logout
};
