import { Schema, model } from 'mongoose';

const phoneSchema = new Schema([{ ddd: { type: String }, number: { type: String } }], {
  _id: false
});

const userAccountSchema = new Schema(
  {
    userId: { type: String, unique: true },
    name: { type: String },
    email: { type: String, unique: true },
    phones: [phoneSchema],
    lastLoginDate: { type: Date }
  },
  {
    timestamps: true
  }
);

const UserAccountModel = model('account', userAccountSchema);

export default UserAccountModel;
