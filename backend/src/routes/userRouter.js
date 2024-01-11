const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", authMiddleware, (req, res) => {
  console.log(req.user);
  return;
});
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/refresh", userController.refresh);

module.exports = router;
// http://localhost:3000/user/
