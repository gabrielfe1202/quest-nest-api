import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './drizzle/schema';
import { DrizzleAsyncProvider } from './drizzle/drizzle.provider';

@Injectable()
export class AppService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async getFirstRole() {
    const existingUserRole = await this.db.select().from(schema.levels);    
    //await this.db.insert(schema.contents).values({ title: '', image: '', text: '' })
    return existingUserRole;
  }
}