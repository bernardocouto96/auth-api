import R from 'ramda';

export const validateSignUpFields = userRequest => {
  const phoneList = R.pathOr([], ['phones'], userRequest);

  const hasName = Boolean(R.pathOr('', ['name'], userRequest));
  const hasEmail = Boolean(R.pathOr('', ['email'], userRequest));
  const hasPassword = Boolean(R.pathOr('', ['password'], userRequest));
  const hasPhoneNumber = Boolean(R.pathOr('', ['number'], R.head(phoneList)));
  const hasPhoneDDD = Boolean(R.pathOr('', ['ddd'], R.head(phoneList)));

  return hasName && hasEmail && hasPassword && hasPhoneNumber && hasPhoneDDD;
};

export const validateSignInFields = userRequest => {
  const hasEmail = Boolean(R.pathOr('', ['email'], userRequest));
  const hasPassword = Boolean(R.pathOr('', ['password'], userRequest));

  return hasEmail && hasPassword;
};
