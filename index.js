const connectToMongo = require("./database");
const express = require("express");
const cors = require('cors');

connectToMongo();
const app = express();
app.use(cors());
const port = 5000;

//Middleware
app.use(express.json());

//Available Routes.
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNoteBook-backend listening on port http://localhost:${port}`);
}); 
