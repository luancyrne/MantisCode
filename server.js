const app = require('./src/routes/index');
const port = 3000

app.listen(port, ()=>{
  console.log("Scrapping de vagas rodando") ;
})