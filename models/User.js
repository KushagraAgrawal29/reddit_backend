const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please provide an email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    googleEmail: {
        type: String,
    },
    facebookEmail: {
        type: String,
    },
    displayName: {
        type: String,
    },
    about: {
        type: String,
    },
    avatar: {
        type :String
    },
    banner: {
        type :String,
    },
    karma: {
        type: Number,
        required: true,
        default: 1,
    },
    upVotes: {
        type: Number,
        required: true,
        default: 0,
    },
    downVotes: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    editedAt: {
        type: Date,
    },
    userSettings: {
        gender: {
            type: String,
            required: true,
            default: "man",
        },
        country: {
            type: String,
            required: true,
            default: "India",
        },
        nsfw: {
            type: Boolean,
            required: true,
            default: false,
        },
        verifiedEmail: {
            type: Boolean,
            required: true,
            default: false,
        },
        allowToFollowYou: {
            type: Boolean,
            required: true,
            default: true,
        },
        adultContent: {
            type: Boolean,
            required: true,
            default: false,
        },
        autoplayMedia: {
            type: Boolean,
            required: true,
            default: true,
        },
        newFollowerEmail: {
            type: Boolean,
            required: true,
            default: true,
        },
        unsubscribeFromEmails: {
            type: Boolean,
            required: true,
            default: false,
        },
        socialLinks: [
            {
                type: {
                    type: String,
                    required: true,
                },
                displayText: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    joinedSubreddits: [
        {
            subredditId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Subreddit",
            },
            name: {
                type: String,
                required: true,
            },
        },
    ],
    favouriteSubreddit: [
        {
            subredditId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Subreddit",
            },
            name: {
                type: String,
                required: true,
            },
        },
    ],
    ownedSubreddits: [
        {
            subredditId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Subreddit",
            },
            name: {
                type: String,
                required: true,
            },
        },
    ],
    moderateSubreddits: [
        {
            subredditId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Subreddit",
            },
            name: {
                type: String,
                required: true,
            },
        },
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    historyPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    pinnedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    hiddenPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    upvotedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    downvotedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    followedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    savedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    savedPostsOnly: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    savedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }
    ],
    spammedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    spammedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    commentedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    upvotedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    downvotedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    followedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    blockedUsers: [
        {
            blockedUserId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            blockDate: {
                type: Date,
                required: true
            },
        },
    ],
    followers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    followedUsers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sentMessages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
    receivedMessages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
    usernameMentions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mention",
        },
    ],
    postReplies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PostReplies",
        },
    ],
    conversations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Conversation",
        },
    ],
    notifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "notification",
        },
    ],
    webNotificationToken: {
        type: String
    },
    flutterNotificationToken: {
        type: String,
    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;