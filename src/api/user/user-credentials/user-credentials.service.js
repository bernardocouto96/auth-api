import { saveNewUserCredentials } from './user-credentials.repository';

export const signUpUser = async userCredentials => {
  try {
    const newUserCredentials = { ...userCredentials, lastLoginDate: new Date() };
    const response = await saveNewUserCredentials(newUserCredentials);
    return response;
  } catch (error) {
    throw error;
  }
};
