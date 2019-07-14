import UserCredentialsModel from './user-credentials.model';

export const saveNewUserCredentials = userCredentials => {
  const newUserCredentials = new UserCredentialsModel(userCredentials);
  return newUserCredentials.save();
};

export const findUserByLogin = ({ login }) => UserCredentialsModel.findOne({ login });
