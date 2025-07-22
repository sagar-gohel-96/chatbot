import { Schema, model } from "mongoose";
import { RoomSchemaEntity } from "../types";

const roomSchema = new Schema<RoomSchemaEntity>(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Room", roomSchema);
