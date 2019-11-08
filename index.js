const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const loginRouter = './routes/loginRouter';

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/auth', loginRouter)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(e.message);
});

app.listen(PORT)()=> {
  console.log(`Express is listening on port ${PORT}`)
}