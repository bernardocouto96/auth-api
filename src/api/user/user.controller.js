import { signUpUser } from './user-credentials/user-credentials.service';
import { validateSignUpFields } from './user.validator';

export const signUp = async (req, res, next) => {
  const { body } = req;

  const isValidRequest = validateSignUpFields(body);

  if (!isValidRequest) {
    res.status(422).send('missing required field');
    return;
  }

  const userCredentials = {
    login: body.email,
    password: body.password
  };

  try {
    const response = await signUpUser(userCredentials);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
