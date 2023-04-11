// import router dari express
const express = require("express");
const router = express();
// import product controller
const { createCMSOrganizer, createCMSUser, getCMSUsers } = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../../middlewares/auth");

// pasangkan route endpoint dengan method `create`
router.post("/organizers", authenticateUser, authorizeRoles("owner"), createCMSOrganizer);
router.post("/users", authenticateUser, authorizeRoles("organizer"), createCMSUser);
router.get("/users", authenticateUser, authorizeRoles("owner"), getCMSUsers);
// export router
module.exports = router;
