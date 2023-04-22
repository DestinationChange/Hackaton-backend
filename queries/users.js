const db = require("../db/db_config.js");

//INDEX
const getAllUsers = async () => {
  try {
    const getAllUsers = await db.any("SELECT * FROM destinationchanges");
    return getAllUsers;
  } catch (error) {
    return error;
  }
};

//SHOW
const getAUser = async (id) => {
  try {
    const getAUser = await db.one("SELECT * FROM destinationchanges WHERE id=$1", id);
    return getAUser;
  } catch (error) {
    return error;
  }
};

//CREATE
const createUser = async (user) => {
  try {
    const createUser = await db.one(
      "INSERT INTO destinationchanges (username, email, password, region_id, about, created_at, updated_at, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        user.username,
        user.email, 
        user.password, 
        user.region_id, 
        user.about, 
        user.created_at,
        user.updated_at,
        user.image

      ]
    );
    return createUser;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateUser = async (id, user) => {
  try {
    const updateUser = await db.one(
      "UPDATE destinationchanges SET username=$1, email=$2, password=$3, region_id=$4, about=$5, created_at=$6, updated_at=$7, image=$8 WHERE id=$9 RETURNING *",
      [
        user.username,
        user.email, 
        user.password, 
        user.region_id, 
        user.about, 
        user.created_at,
        user.updated_at,
        user.image,
        id
      ]
    );
    return updateUser;
  } catch (error) {
    error;
  }
};

//DELETE
const deleteUser = async (id) => {
  try {
    const deleteUser = await db.one(
      "DELETE FROM destinationchanges WHERE ID = $1 RETURNING *",
      id
    );
    return deleteUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser
};