import { model, Document, Schema } from 'mongoose';

export interface IUsersInterface extends Document {
  id: string;
  username: string;
  password: string;
  mobileToken?: string;
}

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileToken: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: 'Users',
    versionKey: false,
  },
);

export default model<IUsersInterface>('Users', UsersSchema);
