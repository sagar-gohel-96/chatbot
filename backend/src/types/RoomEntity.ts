import { Schema } from "mongoose";

export interface RoomSchemaEntity {
  id: Schema.Types.ObjectId;
  name: string;
  password: string;
}
