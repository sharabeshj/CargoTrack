const sendResponse=function(res,status_code,message){
	//console.log("hi");
	var response= new Object();
	response.status_code=status_code;
	response.message=message;
	res.send(JSON.stringify(response));
}
module.exports=sendResponse;