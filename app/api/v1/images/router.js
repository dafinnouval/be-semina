// import router dari express
const express = require("express");
const router = express();
// import product controller
const { create } = require("./controller");
const upload = require("../../../middlewares/multer");

// pasangkan route endpoint dengan method `create`
router.post("/images", upload.single("avatar"), create);
// export router
module.exports = router;
