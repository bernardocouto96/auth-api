import R from 'ramda';
import { signUpUser, signInUser, validateUser } from './user-credentials/user-credentials.service';
import { validateSignUpFields, validateSignInFields } from './user.validator';
import { createUserAccount, getUserAccount } from './user-account/user-account.service';
import ERROR from '../../constants/errorResponse';

export const signUp = async (req, res, next) => {
  try {
    const { body } = req;
    const isValidRequest = validateSignUpFields(body);

    if (!isValidRequest) throw ERROR.MissingAuthorizationToken;

    const { userId, token } = await signUpUser(body);
    const { createdAt, updatedAt, lastLoginDate } = await createUserAccount({ userId, ...body });

    const response = { userId, token, createdAt, updatedAt, lastLoginDate };

    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { body } = req;
    const isValidRequest = validateSignInFields(body);

    if (!isValidRequest) throw ERROR.MissingRequiredFields;

    const { userId, token } = await signInUser(body);
    const { createdAt, updatedAt, lastLoginDate } = await getUserAccount(userId);

    const response = { userId, token, createdAt, updatedAt, lastLoginDate };

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

export const find = async (req, res, next) => {
  try {
    const token = R.pathOr('', ['headers', 'authorization'], req);
    const userId = R.path(['params', 'userId'], req);

    if (!Boolean(token)) throw ERROR.MissingAuthorizationToken;

    await validateUser(token, userId);
    const { name, email, phones, createdAt, updatedAt, lastLoginDate } = await getUserAccount(
      userId
    );

    const response = { name, email, phones, createdAt, updatedAt, lastLoginDate };

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
