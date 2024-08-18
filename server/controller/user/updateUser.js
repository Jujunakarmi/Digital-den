const { User } = require("../../models")

async function updateUser(req, res) {
    try {
        const { userId, name, email, role } = req.body
        const user = await User.findByIdAndUpdate(
            req.userId,
            { userId, name, email, role },
            { new: true })
        res.status(200).json({ message: "User Updated", success: true, user })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = updateUser