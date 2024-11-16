import { model, Schema } from "mongoose";

interface IActivities {
  title: String;
  dateEnd: Date;
  description: String;
  status: "active" | "pending";
  idUser: Schema.Types.ObjectId | String;
}

const ActivitySchema = new Schema<IActivities>(
  {
    title: {
      type: String,
      required: true,
    },
    dateEnd: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "pending"],
    },
    idUser: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
  },
  { timestamps: true }
);

export const ActivityModel = model<IActivities>("activites", ActivitySchema);
