const db = require("../db/dbConfig.js");

//INDEX
const getAllProjects = async () => {
  try {
    const getProjects = await db.any("SELECT * FROM projectDescription");
    return getProjects;
  } catch (error) {
    return error;
  }
};

//SHOW
const getAProject = async (id) => {
  try {
    const getProject = await db.one(
      "SELECT * FROM projectDescription WHERE id=$1",
      id
    );
    return getProject;
  } catch (error) {
    return error;
  }
};

//CREATE
const createProject = async (user_id) => {
  try {
    const createdProject = await db.one(
      "INSERT INTO projectDescription (content, created_at) VALUES ($1, $2) RETURNING *",
      [user_id.content, user_id.created_at]
    );
    return createdProject;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateProject = async (id, user_id) => {
  try {
    const updatedProject = await db.one(
      "UPDATE projectDescription SET content=$1, created_at=$2 WHERE id=$3 RETURNING *",
      [user_id.content, user_id.created_at, id]
    );
    return updatedProject;
  } catch (error) {
    error;
  }
};

//DELETE
const deleteProject = async (id) => {
  try {
    const deletedProject = await db.one(
      "DELETE FROM projectDescription WHERE ID = $1 RETURNING *",
      id
    );
    return deletedProject;
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
