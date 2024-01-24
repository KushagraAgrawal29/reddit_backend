const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    viewName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String, // "sports", "education" etc.
        required: true,
    },
    banner: {
        type: String,
    },
    picture: {
        type: String,
    },
    type: {
        type: String, // "public" , "private"
        required: true,
    },
    mainTopic: {
        type: String,
    },
    subTopics: [
        {
            type: String,
        },
    ],
    flairs: [
        {
            type: mongoose.Schema.Types.ObjectId, // A flair is a tag which shows others what your post is about
            ref: "Flair",
        },
    ],
    flairSettings: {
        enablePostFlairInThisCommunity: {
            type: Boolean,
            default: true,
            required: true,
        },
        allowUserToAssignTheirOwn: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    dateOfCreation: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    deletedAt: {
        type: Date,
    },
    views: {
        type: Number,
    },
    members: {
        type: Number,
        required: true,
        default: 1,
    },
    nsfw: {
        type: Boolean,
        default: false,
        required: true,
    },
    numberOfRules: {
        type: Number,
        required: true,
        default: 0,
    },
    numberOfFlairs: {
        type: Number,
        required: true,
        default: 0,
    },
    rules: [
        {
            ruleTitle: {
                type: String,
                required: true,
            },
            ruleDescription: {
                type: String,
            },
            ruleOrder: {
                type: Number,
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
            updatedAt: {
                type: Date,
            },
            deletedAt: {
                type: Date,
            },
            appliesTo: {
                type: String,
                required: true,
            },
            reportReason: {
                type: String,
            },
        },
    ],
    moderators: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            dateOfModeration: {
                type: Date,
                required: true,
            },
            permissions: [
                {
                    type: String
                }
            ],
        },
    ],
    invitedModerators: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            dateOfInvitation: {
                type: Date,
                required: true,
            },
            permissions: [
                {
                    type: String,
                },
            ],
        },
    ],
    bannedUsers: [
        {
            username: {
                type: String,
                required: true
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            bannedAt: {
                type: Date,
            },
            bannedPeriod: {
                type: Number, // in days
            },
            modNote: {
                type: String,
            },
            noteInclude: {
                type: String,
            },
            reasonForBan: {
                type: String,
            },
        },
    ],
    mutedUsers: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            dateOfMute: {
                type: Date,
                required: true
            },
            muteReason: {
                type: String,
            },
        },
    ],
    approvedUsers: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            dateOfApprove: {
                type: Date,
                required: true,
            },
        },
    ],
    waitedUsers: [
        {
            username: {
                type: String,
                required: true
            },
            userID:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            message: {
                type: String,
            },
        },
    ],
    owner: {
        username: {
            type: String,
            required: true,
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    subbredditPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    unmoderatedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    editedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    spammedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    editedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    spammedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    subbredditSettings: {
        sendWelcomeMessage: {
            type: Boolean,
            default: false,
            required: true,
        },
        welcomeMessage: {
            type: String,
        },
        language: {
            type: String,
            required: true,
            default: "English",
        },
        region: {
            type: String,
        },
        acceptingRequestsToJoin: {
            type: Boolean,
            default: true,
            required: true,
        },
        acceptingRequestsToPost: {
            type: Boolean,
            default: true,
            required: true,
        },
        approvedUsersHaveTheAbilityTo: {
            type: String,
            required: true,
            default: "Post Only",
        },
    },
    subbredditPostSettings: {
        enableSpoiler: {
            type: Boolean,
            required: true,
            default: true,
        },
        suggestedSort: {
            type: String,
            enum: ["none", "best", "top", "new", "old"],
            required: true,
            default: "none",
        },
        allowImagesInComment: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    joinedUsers: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            joinDate: {
                type: Date,
            },
        },
    ],
    leftUsers: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            leaveDate: {
                type: Date,
            },
        },
    ],
    numberOfViews: {
        type: Number,
        required: true,
        default: 0,
    },
    //NEEDS TO BE AUTO INCREMENT
    //Is used to get random subreddit from categories
    randomIndex: {
        type: Number,
    },
});

const Subreddit = mongoose.model("Subreddit",communitySchema);
module.exports = Subreddit;