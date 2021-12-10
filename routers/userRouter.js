const userRouter = require("express").Router();
const {
  postNewUser,
  patchNewBadge,
  patchStreak,
  patchNewPlant,
} = require("../controllers/users-controllers");

userRouter.post("/", postNewUser);
userRouter.patch("/:username/badges", patchNewBadge);
userRouter.patch("/:username/streak", patchStreak);
userRouter.patch("/:username/plants", patchNewPlant);
module.exports = userRouter;
