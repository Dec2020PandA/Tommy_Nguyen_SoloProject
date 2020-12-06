const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { secret } = require("../config/jwt.config");
require("dotenv").config();

const { User } = require("../models/user.model");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

module.exports.getUser = (req, res) => {
  User.find({ _id: req.params.id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

module.exports.registerUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      const userToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY
      );

      res
        .cookie("usertoken", userToken, secret, {
          httpOnly: true,
        })
        .json({ msg: "success", user: user });
    })
    .catch((err) => res.json(err));
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    return res.sendStatus(400);
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!correctPassword) {
    //password wasn't a match!
    return res.sendStatus(400);
  }

  //If we make it this far, the password was correct
  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY
  );

  //note that response object allows chained calls to cookie and json
  //Sends if successful login
  res
    .cookie("usertoken", userToken, secret, {
      httpOnly: true,
    })
    .json({ msg: user._id });
};

module.exports.logout = (req, res) => {
  res.clearCookie("usertoken");
  res.sendStatus(200);
};
