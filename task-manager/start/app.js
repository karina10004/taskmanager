const express = require('express');
const app = express();
const tasks = require('../final/routes/tasks');
require('../final/db/connect')
app.use(express.static('./public'))
app.use(express.json());



// Prefix the route with a forward slash (/api/v1/tasks)
app.use('/api/v1/tasks', tasks);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
