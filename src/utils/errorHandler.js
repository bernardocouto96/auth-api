export const notFoundErrorHandler = (req, res, next) =>
  res.status(404).send({ error: 'Resource not found.' });

export const defaultErrorHandler = (error, req, res, next) => {
  return Boolean(error.response)
    ? res.status(error.response.status || 500).send({ error: error.response.data })
    : res.status(error.status || 500).send({ error });
};
