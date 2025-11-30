import { PrismaClient } from '@prisma/client';

export default class DatabaseClient {
  static _instance: DatabaseClient;
  private _prisma: PrismaClient;

  private constructor() {
    this._prisma = new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL,
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  public static get instance(): DatabaseClient {
    return this._instance || (this._instance = new this());
  }
  public get prisma(): PrismaClient {
    return this._prisma;
  }
}
