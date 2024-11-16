import { model, Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  pasword: string;
  roll: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pasword: {
      type: String,
      require: true,
    },
    roll: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Usermodel = model<IUser>("User", UserSchema);
