import { saveNewUserCredentials } from './user-credentials.repository';
import bcrypt from 'bcrypt';
import { saltRounds } from '../../../config';

export const signUpUser = async userCredentials => {
  try {
    const hash = await hashPassword(userCredentials.password);
    const newUserCredentials = {
      ...userCredentials,
      lastLoginDate: new Date(),
      password: hash
    };

    const response = await saveNewUserCredentials(newUserCredentials);
    return response;
  } catch (error) {
    throw error;
  }
};

const hashPassword = password => {
  return bcrypt.hash(password, saltRounds);
};
