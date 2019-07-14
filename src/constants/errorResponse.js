export default {
  MissingRequiredFields: {
    name: 'MissingRequiredFieldsError',
    status: 412,
    message: 'There are missing fields in the request.'
  },
  MissingAuthorizationToken: {
    name: 'MissingAuthorizationTokenError',
    status: 401,
    message: 'No Authorization Token was provided.'
  },
  InvalidToken: {
    name: 'InvalidTokenError',
    status: 401,
    message: 'Authorization token is invalid.'
  },
  InvalidSession: {
    name: 'InvalidSessionError',
    status: 401,
    message: 'Token has expired, sign in to get a new token.'
  },
  InvalidCredentials: {
    name: 'InvalidCredentialsError',
    status: 401,
    message: 'Login or password is invalid.'
  },
  DuplicatedEmail: {
    name: 'DuplicatedEmailError',
    status: 409,
    message: 'Email already exists'
  },
  UnauthorizedOnDb: {
    name: 'UnauthorizedOnDbError',
    status: 401,
    message: 'Db user not allowed to update'
  }
};
