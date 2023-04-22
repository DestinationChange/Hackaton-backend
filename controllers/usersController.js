const express = require("express");
const users = express.Router();

const {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../queries/users");

//INDEX
users.get("/", async (_, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//SHOW
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneUser = await getAUser(id);
  console.log("user", oneUser);
  if (!oneUser.message) {
    res.status(200).json(oneUser);
  } else {
    res.status(400).json({ error: "Not found" });
  }
});

//CREATE
users.post("/", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

//DELETE
users.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

//UPDATE

users.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: " user not found" });
  }
});

module.exports = users;
