const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ownerUsername: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // This is a reference to the User model
        required: true,
    },
    subredditId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subreddit" // This is a reference to the Subbreddit
    },
    subredditName: {
        type: String,
    },
    kind: {
        type: String,
        enum: ["hybrid", "image", "video", "post", "link"],
        default: "hybrid",
        required: true,
    },
    content: {
        type: Object,
    },
    images: [
        {
            path: {
                type: String,
                required: true,
            },
            caption: {
                type: String,
            },
            link: {
                type: String,
            },
        },
    ],
    video: {
        type: String,
    },
    link: {
        type: String,
    },
    sharePostId: {
        type: String,
    },
    suggestedSort: {
        type: String,
        default: "new",
    },
    nsfw: {
        type: Boolean,
        default: false,
    },
})