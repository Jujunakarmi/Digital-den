const {User} = require('../models');
const bcrypt = require('bcrypt');


module.exports ={
    async createUser(req,res) {
     try{
       // Hash the password before creating the user
       const hashedPassword = await bcrypt.hash(req.body.password, 10);
       // Create a new user with the hashed password and spreading the body obj
       const user = await User.create({ ...req.body, password: hashedPassword });
       res.status(200).json(user);
     }catch(err){
        res.status(500).json(err)
     }
    }
}
