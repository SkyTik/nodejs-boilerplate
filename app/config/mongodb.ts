import { MongoClient } from 'mongodb';

export default class MongoDBConnection {
  private static client: MongoClient;

  public static async getInstance(uri: string): Promise<MongoClient> {
    if (!MongoDBConnection.client) {
      MongoDBConnection.client = await MongoClient.connect(uri, { maxPoolSize: 20 });
    }
    return MongoDBConnection.client;
  }
}
