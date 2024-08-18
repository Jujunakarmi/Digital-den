const { Schema, model } = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
        },
        profilePic:
        {
            type: String,
        },
        role: {
            type: String,
            //  enum: ["General", "Admin"],
            default: "General"
        }
    },
    {
        timestamps: true,
    }
)



const userModel = model("user", userSchema)

module.exports = userModel;