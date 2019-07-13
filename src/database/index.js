import mongoose from 'mongoose';
import { dbUri } from '../config';

export default () => {
  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB.');
  });

  mongoose.connection.on('error', err => {
    console.error(`Failed to connect to MongoDB. Error: ${err}`);
  });
};
