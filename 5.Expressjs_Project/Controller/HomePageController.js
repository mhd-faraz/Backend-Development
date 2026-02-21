function HomePageResponse(req,res) {
     res.send("welcome to my home page of express!!!!");
}

function AboutPageResponse(req,res) {
    res.send("welcome to about page of express!!111122");


}

function ContactPageResponse(req,res) {
    res.send("welcome to contact page of express!!");
}
module.exports = {HomePageResponse, AboutPageResponse , ContactPageResponse};