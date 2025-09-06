

const StatusCheck = (req ,res,next) => {
     const {status,title , author} = req.body;

     if(!title || !author){
        res.status(500).json({msg:"Incomplete Data"});
     }

//console.log(status)

     if(status!=="available" && status!=="borrowed" && status!=="reserved"){
       res.status(500).json({msg:" status is wrong"});
     }else{
         next();
     }
}

module.exports = {StatusCheck};