import { Provider } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

export const DATABASE_PROVIDER = 'DATABASE_CONNECTION';

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async () => {
      return await mysql.createConnection({
        host: 'localhost',
        user: 'iotapp_user',          // Nuevo usuario
        password: 'ContrasenaSegura123!', // Nueva contraseña
        database: 'iotapp_bd',
      });
    },
  },
];