var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use((req,res)=>{
  res.sendFile('index.html',{root:'.'})
})

app.listen(process.env.PORT || 1200,(err)=>{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log('server started')
  }
});
