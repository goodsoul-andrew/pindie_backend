const express = require('express');

const app = express();
const PORT = 3100;


function helloWorld (req, res)  {
  res.status(200).send({"message": "Hello World"})
}


app.get('/', helloWorld);
app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});