import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Room } from '../entity/Room';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.SUPABASE_DB_URL,
  synchronize: true,
  logging: false,
  entities: [Room],
});
