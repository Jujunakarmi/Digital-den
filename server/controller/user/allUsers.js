const { User } = require('../../models');

async function allUsersController(req, res)  {
try{
console.log("user-id", req.userId)

const allUsers = await User.find({})
res.json({
    data: allUsers,
    message: "All Users",
    success: true,
    error: false
})
}catch(err){
    res.status(400).json({
        message : err.message || err,
        error: true,
        success: false
    })
}
};

module.exports = allUsersController;