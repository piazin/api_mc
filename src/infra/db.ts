import mongoose from 'mongoose';

export class Database {
  private DB_URL = 'mongodb://localhost:27017/db_portal';

  createConnection() {
    mongoose.connect(this.DB_URL).then((on) => console.info('MongoDB Connect'));
  }
}
