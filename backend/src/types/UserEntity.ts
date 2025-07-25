import { Schema } from "mongoose";
import { BaseEntity } from "./BaseEntity";

export interface UserSchemaEntity {
  id: Schema.Types.ObjectId;
  email: string;
  name: string;
  password: string;
  generateAuthToken: () => string;
}

export type CreateUserPayload = Omit<UserSchemaEntity, "generateAuthToken">;

export interface GetUserData
  extends BaseEntity,
    Omit<CreateUserPayload, "password"> {}

export type UpdateUserPayload = Partial<CreateUserPayload>;
