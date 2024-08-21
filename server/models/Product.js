const { Schema, model } = require("mongoose")

const productSchema = new Schema (
    {
        productName: {
            type: String,
            required: true,
            trimmed: true
        },
        brandName: {
            type: String,
            required: true,
            trimmed: true
        },
        category: {
            type: String,
        },
        productImage: [],
        description: {
            type: String
        },
        price: {
            type: Number
        },
        sellingPrice: {
            type: Number
        },

    },
    {
        timestamps: true
    }
);

const productModel = model("product", productSchema)

module.exports = productModel;