const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", authMiddleware, (req, res) => {
  console.log(req.user);
  return res.status(200).json();
});
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/refresh", userController.refresh);

module.exports = router;
