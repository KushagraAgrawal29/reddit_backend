const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    randomIndex: {
        type: Number,
        required: true,
    },
    visited: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;