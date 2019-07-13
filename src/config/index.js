const defaultDbCredentials = { username: 'read-only-user', password: 'vNuZbwH8hTVKK85S' };

export const dbUri =
  process.env.DB_URI ||
  `mongodb://${process.env.DB_USERNAME || defaultDbCredentials.username}:${process.env
    .DB_PASSWORD || defaultDbCredentials.password}@ds151007.mlab.com:51007/users-db`;

export const port = process.env.PORT || 5000;

export const saltRounds = process.env.SALT_ROUNDS || 12;

export const tokenSecret = process.env.TOKEN_SECRET || 'dev-only-secret';

export const tokenExpirationTime = process.env.TOKEN_EXPIRATION_TIME || 60 * 30;
