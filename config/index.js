const defaultDbCredentials = { username: 'read-only-user', password: 'vNuZbwH8hTVKK85S' };

export const dbUri =
  process.env.DB_URI ||
  `mongodb://${process.env.DB_USERNAME || defaultDbCredentials.username}:${process.env
    .DB_PASSWORD || defaultDbCredentials.password}@ds151007.mlab.com:51007/users-db`;
