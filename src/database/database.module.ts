import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import { MongooseModule } from '@nestjs/mongoose';

import config from '../config';

const API_KEY = '12345678';
const API_KEY_PROD = 'PROD12345678';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          dbName,
        } = configService.mongo;

        return {
          uri: `${connection}://${host}`,
          user,
          pass: password,
          dbName,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY', // nombre
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, // valor
    },
  ],
  exports: ['API_KEY', MongooseModule],
})
export class DatabaseModule {}
