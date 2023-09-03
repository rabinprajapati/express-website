const router = require("express").Router();
const mail = require("../services/mailer");

// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("post page");
// });
// router.get("/:name", (req, res) => {
//   console.log(req.query);
//   const { name } = req.params;
//   const { address, roll } = req.query;
//   res.send(`hello ${name}. Your are from ${address} and roll no is ${roll}`);
// });
// router.get("/:name", (req, res) => {
//   let { name } = req.params;
//   name = name ? name : "default name";
//   res.render("index", { name });
// });

router.get("/about", (req, res) => {
  res.render("about", { route: "/about" });
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.post("/contact", (req, res) => {
  // console.log(req.body);
  mail(req.body);
  // const { name, email, subject, message } = req.body;
  res.render("contact");
});
router.get("/blog", (req, res) => {
  res.render("blog");
});
router.get("/portfolio", (req, res) => {
  res.render("portfolio");
});
router.get("/services", (req, res) => {
  res.render("services");
});
router.get("/team", (req, res) => {
  res.render("team");
});
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
