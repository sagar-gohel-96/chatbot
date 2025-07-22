import { Schema, model } from "mongoose";
import { UserSchemaEntity } from "../types";

const userSchema = new Schema<UserSchemaEntity>(
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

module.exports = model("User", userSchema);
