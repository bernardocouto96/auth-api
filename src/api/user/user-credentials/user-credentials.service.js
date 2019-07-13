import { saveNewUserCredentials, findUserByLogin } from './user-credentials.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { saltRounds, tokenSecret, tokenExpirationTime as expiresIn } from '../../../config';

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

export const signInUser = async userCredentials => {
  try {
    const response = await findUserByLogin(userCredentials.login);
    const token = await generateToken(response._id);
    return token;
  } catch (error) {
    throw error;
  }
};

const hashPassword = password => bcrypt.hash(password, saltRounds);

const generateToken = id => jwt.sign({ id }, tokenSecret, { expiresIn });
