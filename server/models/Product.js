const { Schema, model } = require("mongoose")

const productSchema = new Schema (
    {
        productName: {
            type: String,
            required: true,

        },
        brandName: {
            type: String,
            required: true,
          
        },
        category: {
            type: String,
        },
        productImage: [],
        description: {
            type: String
        },
        price: {
            type: Number,
            min: 0,
        },
        sellingPrice: {
            type: Number,
            min: 0,
        },

    },
    {
        timestamps: true
    }
);

const productModel = model("product", productSchema)

module.exports = productModel;