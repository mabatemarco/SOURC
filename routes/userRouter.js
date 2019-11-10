const { Router } = require('express');
const userRouter = Router();
const { User, Project, Team } = require('../models');
const { restrict } = require('../services/auth')


//get all users
userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users)
})

//get one user and all associated projects
userRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const user = await User.findByPk(id, {
    include: [{
      model: Project,
      through: {
        attributes: ['is_leader', 'is_member']
      }
    }]
  });
  res.json(user)
})

//edit profile
userRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = await User.findByPk(id);
  await user.update(data);
  res.json(user)
})

//delete user
userRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  await user.destroy;
  res.json(user)
})

module.exports = userRouter
