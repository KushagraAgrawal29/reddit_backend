const mongoose = require("mongoose");

const postRepliesSchema = new mongoose.Schema({
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
    receiverUsername: {
      type: String,
      required: true,
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
    type: {
      type: String,
      required: true,
      default: "post reply",
    },
    isRead: {
      type: Boolean,
      required: true,
      default: false,
    },
});
  
const PostReplies = mongoose.model("PostReplies", postRepliesSchema);
export default PostReplies;