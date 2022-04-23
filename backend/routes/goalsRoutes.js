const express = require("express");
const routes = express.Router();
const { getGoals , setGoals , updateGoals , deleteGoals }   = require("../controllers/goalController");

// we also can do
// routes.route("/").get(getGoals).post(setGoals); //shourtCorts

routes.get("/", getGoals );

routes.post("/",setGoals);

routes.put("/:id", updateGoals )


routes.delete("/:id", deleteGoals )



module.exports = routes ;