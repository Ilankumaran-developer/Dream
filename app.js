var express = require('express');
var app = express();

app.use((req,res)=>{
  res.sendFile('index.html',{root:'.'})
})

app.listen(1200,(err)=>{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log('server started')
  }
});
