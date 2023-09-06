import mongoose from 'mongoose';

export class Database {
  private DB_URL = 'mongodb://localhost:27013/db_portal';

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}
