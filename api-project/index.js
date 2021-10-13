const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// a modification

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send('IA Center - Angular exercise API');
});

require("./routes/user.routes")(app);

app.listen(port, () => {
   console.log('works');
	console.log("hola");
});

