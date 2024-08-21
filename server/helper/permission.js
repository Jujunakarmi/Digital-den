const User = require("../models/User")
const uploadProductPermission =async (userId) => {
    const user = await User.findById(userId)

    if(user.role !== "Admin"){
        return false
    }   
    return true
};

module.exports = uploadProductPermission;