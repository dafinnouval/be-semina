// import router dari express
const express = require("express");
const router = express();
// import product controller
const { create, index, find, update, destroy } = require("./controller");

const { authenticateUser, authorizeRoles } = require("../../../middlewares/auth");

router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get("/categories/:id", authenticateUser, authorizeRoles("organizer"), find);
router.put("/categories/:id", authenticateUser, authorizeRoles("organizer"), update);
router.delete("/categories/:id", authenticateUser, authorizeRoles("organizer"), destroy);

// pasangkan route endpoint dengan method `create`
router.post("/categories", authenticateUser, authorizeRoles("organizer"), create);
// export router
module.exports = router;
