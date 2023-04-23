const db = require("../db/dbConfig.js");

//INDEX
const getAllRegion = async () => {
  try {
    const getAllRegion = await db.any("SELECT * FROM region");
    return getAllRegion;
  } catch (error) {
    return error;
  }
};

//SHOW
const getARegion = async (id) => {
  try {
    const getARegion = await db.one("SELECT * FROM region WHERE id=$1", id);
    return getARegion;
  } catch (error) {
    return error;
  }
};

//CREATE
const createARegion = async (region) => {
  try {
    const createARegion = await db.one(
      "INSERT INTO region (name) VALUES ($1) RETURNING *",
      [region.name]
    );
    return createARegion;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateRegion = async (id, region) => {
  try {
    const updatedRegion = await db.one(
      "UPDATE region SET name=$1, WHERE id=$2 RETURNING *",
      [region.name, id]
    );
    return updatedRegion;
  } catch (error) {
    error;
  }
};

module.exports = {
  getAllRegion,
  getARegion,
  createARegion,
  updateRegion,
};
