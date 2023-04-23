const express = require("express");
const regions = express.Router({ mergeParams: true });
const {
  getAllRegion,
  getARegion,
  createARegion,
  deleteRegion,
  updateRegion,
} = require("../queries/regions");

// Index
regions.get("/", async (req, res) => {
  const allRegions = await getAllRegion();
  if (allRegions[0]) {
    res.status(200).json(allRegions);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Show
regions.get("/:id", async (req, res) => {
  const { id } = req.params;
  const region = await getARegion(id);
  if (region) {
    res.json(region);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// Create
regions.post("/", async (req, res) => {
  try {
    const createdregion = await createARegion(req.body);
    res.status(200).json(createdregion);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

//DELETE
regions.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRegion = await deleteRegion(id);
    res.status(200).json(deletedRegion);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

// Update
regions.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRegion = await updateRegion(id, req.body);
    res.status(200).json(updatedRegion);
  } catch (error) {
    res.status(404).json({ error: "Region not found" });
  }
});

module.exports = regions;
