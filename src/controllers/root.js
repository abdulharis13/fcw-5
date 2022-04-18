const home = (req, res) => {
  return res.render("home/index");
};

const play = (req, res) => {
  return res.render("game-play/gamePlay");
};

const loginPage = (req, res) => {
  return res.render("login/login");
};

module.exports = {
  home,
  play,
  loginPage,
};
