const app = require('./src/routes/index');
require('dotenv/config');

app.listen(process.env.SERVER_PORT, ()=>{
  console.log("Servidor MantisBot") ;
})