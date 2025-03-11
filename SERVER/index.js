const express = require('express');
const app = express();
const routes = require('./routes')
const connectDB = require('./lib/connect')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');
const cors = require('cors');


app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin:['http://localhost:5173'],
  credentials: true,
}));

app.use('/api',routes);

console.log(process.env.DB_URL)

app.listen(3000, () => {
  connectDB();
  console.log('the server is running');
});


//finish income by adding a delete function  done
//make the expense functions  done
//add update user functions