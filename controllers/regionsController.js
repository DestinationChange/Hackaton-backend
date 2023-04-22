const express = require("express")
const regions = express.Router({ mergeParams: true })
const {
  getAllRegion,
  getARegion,
  createARegion,
  updateRegion,
} = require("../queries/regions")
// Index
regions.get("/", async (req, res) => {
  const allRegions = await getAllRegion()
  if (allRegions[0]) {
    res.status(200).json(allRegions)
  } else {
    res.status(500).json({ error: "server error" })
  }
})
// Show
regions.get("/:id", async (req, res) => {
  const { id } = req.params
  const region = await getARegion(id)
  if (region) {
    res.json(region)
  } else {
    res.status(404).json({ error: "not found" })
  }
})

// create
regions.post("/", async (req, res) => {
  try {
    const region = await createARegion(req.body)
    res.json(region)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})
//Update
regions.put("/:id", async (req, res) => {
  const { id } = req.params
  const updatedRegion = await updateRegion(id, req.body)
  res.status(200).json(updatedRegion)
})
module.exports = regions
