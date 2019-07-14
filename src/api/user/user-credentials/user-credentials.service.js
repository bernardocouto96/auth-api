import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as UUID } from 'uuid';
import { saveNewUserCredentials, findUserByLogin } from './user-credentials.repository';
import { saltRounds, tokenSecret, tokenExpirationTime as expiresIn } from '../../../config';
import ERROR from '../../../constants/errorResponse';
import errorType from '../../../constants/errorType';

export const signUpUser = async ({ email, password }) => {
  try {
    const hash = await hashPassword(password);
    const userId = UUID();

    await saveNewUserCredentials({ userId, login: email, password: hash });

    const token = await generateToken(userId);

    return { userId, token };
  } catch (error) {
    if (error.code === errorType.DUPLICATED_ERROR_CODE) throw ERROR.DuplicatedEmail;
    if (error.code === errorType.UNAUTHORIZED_ON_DB_CODE) throw ERROR.UnauthorizedOnDb;
    throw error;
  }
};

export const signInUser = async ({ email, password }) => {
  try {
    const userCredentials = await findUserByLogin({ login: email });
    if (!Boolean(userCredentials)) throw ERROR.InvalidCredentials;

    const passwordMatches = await comparePasswords(password, userCredentials.password);
    if (!passwordMatches) throw ERROR.InvalidCredentials;

    const { userId } = userCredentials;
    const token = await generateToken(userId);

    return { userId, token };
  } catch (error) {
    throw error;
  }
};

export const validateUser = async rawToken => {
  try {
    const token = rawToken.split(' ').pop();
    await verifyToken(token);
  } catch (error) {
    throw error.name === errorType.TOKEN_EXPIRED_ERROR ? ERROR.InvalidSession : ERROR.InvalidToken;
  }
};

const hashPassword = password => bcrypt.hash(password, saltRounds);

const comparePasswords = (password, hash) => bcrypt.compare(password, hash);

const generateToken = userId => jwt.sign({ userId }, tokenSecret, { expiresIn });

const verifyToken = token => jwt.verify(token, tokenSecret);
