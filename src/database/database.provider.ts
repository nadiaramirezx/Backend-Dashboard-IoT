import { Provider } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

export const DATABASE_PROVIDER = 'DATABASE_CONNECTION';

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async () => {
      try {
        console.log('Intentando conectar a la base de datos...');
        const connection = await mysql.createConnection({
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: '',
          database: 'iotapp_bd',
        });
        console.log('Conexión exitosa a la base de datos');
        return connection;
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
      }
    },
  },
];