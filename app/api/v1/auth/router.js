// import router dari express
const express = require("express");
const router = express();
// import product controller
const { signinCms } = require("./controller");

// pasangkan route endpoint dengan method `create`
router.post("/auth/signin", signinCms);
// export router
module.exports = router;
