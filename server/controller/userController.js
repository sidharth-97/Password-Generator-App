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
      user.password=undefined
      console.log(req.session.user)
      res.status(200).json(user);
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

const storePassword = async (req, res) => {
  const data = req.body
  const userId = req.session.user
  if (userId) {
    const user = await userModel.findOne({ _id: userId })
    user.data.push(data)
    await user.save()
    res.status(200).json("Success")
  } else {
    res.status(401).json("Access Denied")
  }
}

const showStoredPasswords = async (req, res) => {
  const userId = req.session.user
  if (userId) {
    const user = await userModel.findOne({ _id: userId })
    res.status(200).json(user.data.reverse())
  } else {
    res.status(401).json("Access Denied")
  }
}


module.exports = {
  signup,
  login,
  logout,
  storePassword,
  showStoredPasswords
};
