const Router = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
  getUser,
  addData,
} = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();

router.post("/user/login", loginUser);
router.post("/user/register", registerUser);
router.get("/user/logout", logoutUser);
router.get("/user/get", getUser);
router.post("/data", verifyToken, addData);

module.exports = router;
