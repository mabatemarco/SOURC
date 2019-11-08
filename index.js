const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const loginRouter = require('./routes/loginRouter');
const { Project } = require('./models')

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/projects', async (req, res) => {
  const projects = await Project.findAll();
  res.json({ projects })
})

app.use('/auth', loginRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
})