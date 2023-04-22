const express = require('express');
const { getAProject, updateProject, deleteProject, createProject } = require('../queries/projectDescription');
const projects = express.Router();


//Index
projects.get("/", async (req, res) => {
    const allProjects = await getAllProjects()
    if (allProjects[0]){
        res.status(200).json(allProjects)
    } else {
        res.status(500).json({ error: "Problem with the server" })
    }
});

//Show
projects.get("/:id", async (req, res) => {
    const { id } = req.params;
    const project = await getAProject(id);
    if (project) {
        res.status(200).json(project);
    } else {
        res.status(404).json({ error: "Page Not Found"})
    }
});

//CREATE
projects.post("/", async (req, res) => {
    try {
      const project = await createProject(project);
      res.status(200).json(createProject);
    } catch (error) {
      res.status(500).json({ error: "Problem With The Server" });
    }
  });
  
  //DELETE
  projects.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProject = await deleteProject(id);
      res.status(200).json(deleteProject);
    } catch (error) {
      res.status(404).json({ error: "Page Not Found" });
    }
  });
  
  //UPDATE
  projects.put('/:id', async(req,res)=>{
      try {
          const { id } = req.params
          const updateProject = await updateProject(id, req.body)
          res.status(200).json(updateProject)
      } catch (error) {
          res.status(404).json({error:"Problem With The Server"})
      }
    });
  
  
  module.exports = projects;