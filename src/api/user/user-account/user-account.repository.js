import UserAccountModel from './user-account.model';

export const saveNewUserAccount = userAccount => {
  const newUserAccount = new UserAccountModel(userAccount);
  return newUserAccount.save();
};

export const findUserByUserId = userId => UserAccountModel.findOne({ userId });

export const updateByUserId = (userId, newData) =>
  UserAccountModel.findOneAndUpdate(userId, newData);
