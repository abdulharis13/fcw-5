// import db
const dbUser = require("../connection/db.json");

const singleData = (req, res) => {
  const id = req.params.id;
  const result = dbUser.find((item) => {
    return item.id === id;
  });
  if (!result) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  return res.status(200).json({
    message: "Operation succesful",
    data: result,
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const user = dbUser.find((u) => {
    return u.email == email && u.password === password;
  });
  console.log(user);
  if (user) {
    return res.status(201).json({
      message: "berhasil login",
      data: user,
    });
  } else {
    return res.status(404).json({
      message: "login gagal",
    });
  }
};

module.exports = {
  singleData,
  login,
};
