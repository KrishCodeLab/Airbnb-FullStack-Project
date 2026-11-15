// To display status code and orignal error message 
class ExpressError extends Error{
  constructor(statuscode,message){
    super();
    this.statuscode=statuscode;
    this.message=message
  }
}

module.exports=ExpressError;