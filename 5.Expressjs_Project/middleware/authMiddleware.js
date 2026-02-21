const SECRET_PASSWORD = "asdf123";

function AuthMiddleware(req,res,next) {
    const headers = req.headers; // this is the data which we are getting from client in headers and this data will be in string format so we have to parse it to json format
    const authorization = headers["authorization"];
    


    console.log(authorization, "authorization");


    if(authorization === SECRET_PASSWORD) {
        // req is good
        next();
    }

    else{
        // bad req
        res.send({message : "error"})
    }

    

}
module.exports = AuthMiddleware;