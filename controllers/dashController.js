const getDash = (req, res) => {
  res.render("dash", { title: "Dashboard" });
};
module.exports = { getDash };
