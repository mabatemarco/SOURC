const { Router } = require('express');
const projectRouter = Router();
const { User, Project, Team } = require('../models');
const { restrict } = require('../services/auth')


//get all projects
projectRouter.get('/', async (req, res) => {
  const projects = await Project.findAll({
    order: [
      ['updated_at', 'DESC'],
    ],
  });
  res.json(projects)
})

//get specific project with all members
projectRouter.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const projects = await Project.findByPk(id, {
    include: [{
      model: User,
      through: {
        attributes: ['is_leader', 'is_member']
      }
    }]
  });
  res.json(projects)
})


//create project, takes project data
projectRouter.post('/create/:creatorId', async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.creatorId);
  const user = await User.findByPk(id);
  const project = await Project.create(data);
  await project.addUser(user, { through: { is_member: true, is_leader: true } })
  res.json(project)
})

//edit project, takes project data
projectRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const project = await Project.findByPk(id);
  await project.update(data);
  res.json(project)
})

//delete project
projectRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const project = await Project.findByPk(id);
  await project.destroy
})

//user application to project
projectRouter.put('/:projectId/apply/:userId', async (req, res) => {
  const projectId = parseInt(req.params.projectId);
  const userId = parseInt(req.params.userId);
  const project = await Project.findByPk(projectId);
  const user = await User.findByPk(userId);
  await project.addUser(user, { through: { is_member: false, is_leader: false } })
  res.json(project)
})

//leader function to approve user for project
projectRouter.put('/:projectid/approve/:userId', async (req, res) => {
  const projectId = req.params.projectId;
  const userId = req.params.userId;
  const project = await Project.findByPk(projectId);
  const user = await User.findByPk(userId);
  await project.addUser(user, { through: { is_member: true, is_leader: false } })
  res.json(project)
})


module.exports = projectRouter