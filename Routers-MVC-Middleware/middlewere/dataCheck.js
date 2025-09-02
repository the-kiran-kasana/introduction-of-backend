
const dataCheck = (req, res, next) => {

        const {title ,IA ,duration} = req.body;
        if(!title || !IA || !duration){
          res.status(406).json({msg : "wrong request is provided"});
        }
        else{
           next();
        }
}

module.exports = {dataCheck}