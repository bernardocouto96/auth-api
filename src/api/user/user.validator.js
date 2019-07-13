import R from 'ramda';

export const validateSignUpFields = userRequest => {
  const hasName = Boolean(R.pathOr('', ['name'], userRequest));
  const hasEmail = Boolean(R.pathOr('', ['email'], userRequest));
  const hasPassword = Boolean(R.pathOr('', ['password'], userRequest));
  const hasPhoneNumber = Boolean(!R.isEmpty(R.pathOr([], ['phones'], userRequest)));

  console.log(hasName, hasEmail, hasPassword, hasPhoneNumber);

  return hasName && hasEmail && hasPassword && hasPhoneNumber;
};
