// const uploadProductPermission = require("../../helper/permission");
// const Product = require("../../models/Product");

// async function updateProductController(req,res) {
//     try {

//         if (!uploadProductPermission(req.userId)) {
//             throw new Error("Permission denied.!!")
//         }


//         const { _id, ...resBody } = req.body
//         const updateProduct = await Product.findByIdAndUpdate(
//             _id,resBody,
//             { $addToSet: { updatedBy: req.userId } })
//         res.json({
//             message: "Product Updated successfully.",
//             data: updateProduct,
//             success: true,
//             error: false
//         })



//     } catch (err) {
//         res.status(400).json({
//             message: err.message || err,
//             error: true,
//             success: false
//         })
//     }
// };

// module.exports = updateProductController;


const uploadProductPermission = require("../../helper/permission");
const Product = require("../../models/Product");

async function updateProductController(req, res) {
    try {
        // Permission check
        if (!uploadProductPermission(req.userId)) {
            return res.status(403).json({ // Return 403 Forbidden if no permission
                message: "Permission denied!",
                success: false,
                error: true
            });
        }

        // Destructure _id and the rest of the body
        const { _id, ...restBody } = req.body;

        // Check if _id is provided
        if (!_id) {
            return res.status(400).json({
                message: "_id is required to update a product.",
                success: false,
                error: true
            });
        }

        // Update the product using findByIdAndUpdate
        const updateProduct = await Product.findByIdAndUpdate(
            _id,
            {
                $set: restBody,
                $addToSet: { updatedBy: req.userId }
            },
            { new: true, runValidators: true } // Options to return the updated document and run validators
        );

        // Check if the product was found and updated
        if (!updateProduct) {
            return res.status(404).json({
                message: "Product not found.",
                success: false,
                error: true
            });
        }

        res.json({
            message: "Product updated successfully.",
            data: updateProduct,
            success: true,
            error: false
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || "An error occurred while updating the product.",
            error: true,
            success: false
        });
    }
};

module.exports = updateProductController;
