import { Module, Global } from '@nestjs/common';

const API_KEY = '12345678';
const API_KEY_PROD = 'PROD12345678';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY', // nombre
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, // valor
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
