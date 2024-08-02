const { User } = require("../../models")

async function userDetailsController (req, res) {
   try{
console.log("user-id", req.userId)
const user = await User.findById(req.userId)
res.status(200).json({
    success: true,
     data:user,
     message: "User Details"
    })

   }catch(err){
    res.status(400).json({
        message : err.message || err,
        error: true,
        success: false
    })
   } 
}

module.exports = userDetailsController