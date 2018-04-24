import { ObjectId } from 'mongodb';
import { fromMongo, findByIds } from './utils';

export default class Place {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('places');
  }

  async all({ lastCreatedAt = 0, limit = 100 }) {
    const results = await this.collection
      .find({ createdAt: { &gt: lastCreatedAt }})
      .sort({ createdAt: 1 })
      .limit(limit)
      .toArray();

    return results.map(fromMongo);
  }


}
