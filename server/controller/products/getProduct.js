const { Product } = require("../../models")

async function getProductController(req, res) {
    try {
        const getProduct = await Product.find();
        res.status(200).json({
            message: "All Products",
            data: getProduct,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }

};

module.exports = getProductController;