import { saveNewUserAccount, updateByUserId, findUserByUserId } from './user-account.repository';

export const createUserAccount = async userAccount => {
  try {
    const lastLoginDate = new Date();
    const newUserAccount = await saveNewUserAccount({ lastLoginDate, ...userAccount });
    return newUserAccount;
  } catch (error) {
    throw error;
  }
};

export const getUserAccount = async userId => {
  try {
    const response = await findUserByUserId(userId);
    await updateLoginDate(userId);

    return response;
  } catch (error) {
    throw error;
  }
};

const updateLoginDate = async userId => {
  const lastLoginDate = new Date();
  try {
    updateByUserId(userId, lastLoginDate);
  } catch (error) {
    throw error;
  }
};
