import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

const API_KEY = '12345678';
const API_KEY_PROD = 'PROD12345678';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { dbName, user, host, password, port } = configService.postgres;

        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY', // nombre
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, // valor
    },
    {
      provide: 'PG', // nombre
      useFactory: (configService: ConfigType<typeof config>) => {
        const { dbName, user, host, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          port,
          password,
          database: dbName,
        });

        client.connect();

        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
