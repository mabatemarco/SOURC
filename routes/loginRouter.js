const { Router } = require('express');
const loginRouter = Router();
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id,
  };
  const token = genToken(userData);
  return {
    user: userData,
    token,
  };
};

loginRouter.post('/register', async (req, res) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const newUsername = req.body.username;
    const users = User.findAll();
    const found = users.filter(user => {
      return user.username === newUsername
    })
    if (found.length > 0) {
      const user = await User.create({
        username: newUsername,
        password_digest,
      });

      const respData = buildAuthResponse(user);

      res.json(respData);
    } else {
      res.send('Username is already selected')
    }
  } catch (e) {
    next(e);
  }
});

loginRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);

      res.json(respData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    next(e);
  }
});

loginRouter.get('/verify', restrict, (req, res) => {
  const user = res.locals.user;
  res.json(user);
})

module.exports = loginRouter