import { Schema, model } from 'mongoose';

const userCredentialsSchema = new Schema(
  {
    login: { type: String, unique: true },
    password: { type: String },
    lastLoginDate: { type: Date }
  },
  {
    timestamps: true
  }
);

const UserCredentialsModel = model('Credentials', userCredentialsSchema);

export default UserCredentialsModel;
