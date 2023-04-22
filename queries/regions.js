const db = require("../db/db_config.js");

//INDEX
const getAllRegion = async () => {
    try {
      const getAllRegion = await db.any("SELECT * FROM destinationchanges");
      return getAllRegion;
    } catch (error) {
      return error;
    }
  };
  
  //SHOW
  const getARegion = async (id) => {
    try {
      const getARegion = await db.one("SELECT * FROM destinationchanges WHERE id=$1", id);
      return getARegion;
    } catch (error) {
      return error;
    }
  };
  
  //CREATE
  const createARegion = async (reigon) => {
    try {
      const createARegion = await db.one(
        "INSERT INTO destinationchanges (username) VALUES ($1) RETURNING *",
        [
          user.username
  
        ]
      );
      return createARegion;
    } catch (error) {
      return error;
    }
  };
  
  //UPDATE
  const updateRegion = async (id, region) => {
    try {
      const updateRegion = await db.one(
        "UPDATE destinationchanges SET username=$1, WHERE id=$2 RETURNING *",
        [
          region.username,
          id
        ]
      );
      return updateRegion;
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