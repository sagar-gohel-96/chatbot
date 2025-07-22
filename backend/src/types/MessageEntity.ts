import { Schema } from "mongoose";

export interface MessageSchemaEntity {
  id: Schema.Types.ObjectId;
  body: string;
  sendBy: string;
  roomId: Number;
  sendByName: string;
}
