const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'My Very Very Very Very Very Beautiful World';
  res.send(`<H1>Hello ${name}!</H1>`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
