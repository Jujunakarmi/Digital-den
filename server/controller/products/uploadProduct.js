const uploadProductPermission = require("../../helper/permission")
const Product = require("../../models/Product")

async function uploadProductController(req, res) {
    try {

        const sessionUserid = req.userId
        
        if(!uploadProductPermission (sessionUserid)){
            throw new Error("Permission Denied")
        }


        const uploadProduct = await Product.create(req.body)
        res.status(201).json({
            message: "Product Uploaded",
            success: true,
            error: false,
            data: uploadProduct
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }

}
module.exports = uploadProductController;