const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sendingUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    followingUsername: {
      type: String,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    type: {
      type: String,
      required: true,
    },
    data: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    read: {
      required: true,
      type: Boolean,
      default: false,
    },
    hidden: {
      type: Boolean,
      required: true,
      default: false,
    },
    date: {
      type: Date,
      required: true,
    },
});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;