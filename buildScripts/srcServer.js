var express = require("express");
var path = require("path");
var open = require("open");
import webpack from 'webpack'
import config from '../webpack.config.dev';
/*eslint-disable no-console*/ 
var port=3000;
var app=express();
const compiler = webpack(config);
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
})
app.use(
    require('webpack-dev-middleware')(compiler,{
        noInfo:true,
        publicPath:config.output.publicPath
    })
);

app.get('/users',(req,res)=>{
    res.json([{"id":1,"firstname":"burny","lastname":"xu"},
{'id':2,'firstname':"tom","lastname":"liu"}])
})
app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open("http://localhost:"+port);
    }
    
})