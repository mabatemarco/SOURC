const { Router } = require('express');
const loginRouter = Router();
const { User, sequelize } = require('../models');
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

loginRouter.post('/register', async (req, res, next) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { username, name, email_address, role, about_me, image_url } = req.body
    const user = await User.create({
      username,
      password_digest,
      name,
      email_address,
      role,
      about_me,
      image_url
    });

    const respData = buildAuthResponse(user);
    res.json(respData);

  } catch (e) {
    next(e);
  }
}
);

loginRouter.post('/login', async (req, res, next) => {
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