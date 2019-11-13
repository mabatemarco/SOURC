const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const projectRouter = require('./routes/projectRouter');
const { Project } = require('./models')
const { Team } = require('./models')
const { User } = require('./models')

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());


app.use('/auth', loginRouter);
app.use('/users', userRouter);
app.use('/projects', projectRouter);

app.use((e, req, res, next) => {
  console.error(e.stack);
  res.status(500).send(e.message);
});

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
})