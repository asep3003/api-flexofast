const tbl = require("../models");
const Model = tbl.user;
const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  let { username, password } = req.body;
  let user = {};

  if (username == password) {
    user = await Model.findOne({
      where: {
        username: username,
      }
    });
  }

  if (user) {
    const accessToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        username: user.username,
      },
      accessTokenSecret,
    );
    return res.json({
      success: true,
      data: {
        token: accessToken,
      },
    });
  } else {
    return res.json({
      success: false,
      message: "Pastikan Nama dan Nomor Handphone Anda benar.",
    })
  }
};