const db = require("../db/dbConfig.js");

//INDEX
const getAllProjects = async () => {
  try {
    const getAllProjects = await db.any("SELECT * FROM projectDescription");
    return getAllProjects;
  } catch (error) {
    return error;
  }
};

//SHOW
const getAProject = async (id) => {
  try {
    const getAProject = await db.one(
      "SELECT * FROM projectDescription WHERE id=$1",
      id
    );
    return getAProject;
  } catch (error) {
    return error;
  }
};

//CREATE
const createProject = async (user_id) => {
  try {
    const createProject = await db.one(
      "INSERT INTO projectDescription (username, content, created_at) VALUES ($1, $2, $3) RETURNING *",
      [user_id.username, user_id.content, user_id.created_at]
    );
    return createProject;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateProject = async (id, user_id) => {
  try {
    const updateProject = await db.one(
      "UPDATE projectDescription SET username=$1, content=$2, created_at=$3 WHERE id=$4 RETURNING *",
      [user_id.username, user_id.content, user_id.created_at, id]
    );
    return updateProject;
  } catch (error) {
    error;
  }
};

//DELETE
const deleteProject = async (id) => {
  try {
    const deleteProject = await db.one(
      "DELETE FROM projectDescription WHERE ID = $1 RETURNING *",
      id
    );
    return deleteProject;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProjects,
  getAProject,
  createProject,
  updateProject,
  deleteProject,
};
