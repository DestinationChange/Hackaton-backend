const express = require("express");
const projectDescription = express.Router();

const {
  getAllProjects,
  getAProject,
  updateProject,
  deleteProject,
  createProject,
} = require("../queries/projectDescription");

//Index
projectDescription.get("/", async (req, res) => {
  const allProjects = await getAllProjects();
  if (allProjects[0]) {
    res.status(200).json(allProjects);
  } else {
    res.status(500).json({ error: "Problem with the server" });
  }
});

//Show
projectDescription.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await getAProject(id);
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ error: "Page Not Found" });
  }
});

//CREATE
projectDescription.post("/", async (req, res) => {
  try {
    const project = await createProject(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: "Problem With The Server" });
  }
});

//DELETE
projectDescription.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await deleteProject(id);
    res.status(200).json(deletedProject);
  } catch (error) {
    res.status(404).json({ error: "Page Not Found" });
  }
});

//UPDATE
projectDescription.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await updateProject(id, req.body);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({ error: "Problem With The Server" });
  }
});

module.exports = projectDescription;
