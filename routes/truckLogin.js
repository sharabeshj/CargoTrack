var express=require('express');
var models=require('../models');
var sendResponse=require('./sendRes')

var app=express();
app.post('/',function(req,res){

	models.driver_detail.find({where: {driver_id: req.body.driver_id}}).then(function(obj){
		if(obj.password==req.body.password){
			sendResponse(res,200,"Hi");
		}
	})
	.catch(function(err){
		console.log(err);
	});
});
module.exports=app;