import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, required: true },
    body: {
      type: String,
      required: true,
    },
    sendBy: {
      type: String,
      required: true,
    },
    roomId: {
      type: Number,
      ref: "Room",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
