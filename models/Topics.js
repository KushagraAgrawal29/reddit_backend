const mongoose = require("mongoose");

const topicsSchema = new mongoose.Schema({
    topicName: { 
        type: String, 
        required: true 
    },
});

const Topics = mongoose.model("Topics",topicsSchema);
module.exports = Topics;