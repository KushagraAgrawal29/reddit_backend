const mongoose = require("momgoose");

const messageSchema = mongoose.Schema({
    subredditName: {
      type: String,
    },
    text: {
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
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    senderUsername: {
      type: String,
      required: true,
    },
    isSenderUser: {
      type: Boolean,
      required: true,
    },
    receiverUsername: {
      type: String,
      required: true,
    },
    isReceiverUser: {
      type: Boolean,
      required: true,
    },
    subject: {
      type: String,
    },
    isRead: {
      type: Boolean,
      required: true,
      default: false,
    },
    isSpam: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "Message",
    },
    isReply: {
      type: Boolean,
      required: true,
      default: false,
    },
    repliedMsgId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
});
  
const Message = mongoose.model("Message", messageSchema);
export default Message;