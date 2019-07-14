import { Schema, model } from 'mongoose';

const userCredentialsSchema = new Schema(
  {
    userId: { type: String, unique: true },
    login: { type: String, unique: true },
    password: { type: String }
  },
  {
    timestamps: true
  }
);

const UserCredentialsModel = model('credentials', userCredentialsSchema);

export default UserCredentialsModel;
