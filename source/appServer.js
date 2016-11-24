var express = require('express'),
app = express(),
path=require('path'),
port = 3001;

app.use(express.static('public'));

app.get("/", (req,res)=>{
  res.sendFile(path.resolve(`${__dirname}/route1.html`));
});

app.get("/route1", (req,res)=>{
  res.sendFile(path.resolve(`${__dirname}/../public/route1.html`));
});

app.get("/route2", (req,res)=>{
  res.sendFile(path.resolve(`${__dirname}/../public/route2.html`));
});

app.listen(port,()=>{
  console.log(`listening at port: ${port}`);
});
