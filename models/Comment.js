const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    parentId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    parentType:{
        type: String,
        required:true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,  // reference to the post that this comment is on
        ref:"Post",                            // what model "Post" is being referenced in this field
        required:[true,"A comment must belong to a Post"]
    },
    subbredditName: {
        type:String,
    },
    level: {
        type: Number,
        required: true,
    },
    content: {
        type: Object,
    },
    numberOfVotes: {
        type: Number,
        required: true,
        default: 1,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    editedAt: {
        type: Date,
    },
    deletedAt:{
        type:Date,
    },
    ownerUsername: {
        type: String,
        required: [true, 'A comment must have an owner'],
    },
    ownerId: {
        type:mongoose.Schema.Types.ObjectId,
        required: [true,'A comment must be associated with a user'] ,
        ref:'User'
    },
    markedSpan: {
        type:Boolean,
        required: true,
        default: true,
    },
    nsfw: {
        type: Boolean,
        default: false,
        required: true
    },
    children:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        },
    ],
    moderation: {
        approve: {
            approvedBy: {
                type: String,
            },
            approvedDate: {
                type: Date,
            },
        },
        remove: {
            removedBy: {
                type:String,
            },
            removedDate:{
                type: Date,
            },
        },
        spam: {
            spammedBy: {
                type: String,
            },
            spammedDate: {
                type: Date,
            },
        },
        lock: {
            type: Boolean,
            default: false
        },
    },
    followingUsers: [
        {
            username: {
                type: String,
                required: true,
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        },
    ],
});

const Comment = mongoose.model("Comment",commentSchema);
module.exports = Comment;