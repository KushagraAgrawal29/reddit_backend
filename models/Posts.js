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
    spoiler: {
        type: String,
    },
    markedSpam: {
        type: Boolean,
        default: false,
    },
    sendReplies: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    editedAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
    flair: {
        types: mongoose.Schema.Types.ObjectId,
        ref: "Flair",
    },
    numberOfUpvotes: {
        type: Number,
        default: 0,
    },
    numberOfDownVotes: {
        type: Number,
        default: 0,
    },
    inSights: {
        totalViews: {
            type: Number,
            default: 0,
        },
        upvoteRate: {
            type: Number,
            default: 0, // Calculated on the fly if not provided
        },
        communityKarma: {
            type: Number,
            default: 0,
        },
        totalShare: {
            type: Number,
            default: 0,
        },
    },
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
                type: String,
            },
            removedDate: {
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
            default: false,
        },
    },
    usersCommented: [
        {
            types: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
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
    scheduleDate: {
        type: Date,
    },
    scheduleTime: {
        type: Number,
    },
    scheduleTimeZone: {
        type: String,
    },
    hotScore: {
        type: Number,
        default: 0,
    },
    hotTimingScore: {
        type: Number,
        default: 0,
    },
    bestScore: {
        type: Number,
        default: 0,
    },
      bestTimingScore: {
        type: Number,
        default: 0,
    },
    numberOfVotes: {
        type: Number,
        default: 0,
    },
    numberOfViews: {
        type: Number,
        default: 0,
    },
});

const Post = mongoose.model("Post",postSchema);
module.exports = Post;