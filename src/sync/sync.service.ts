import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_PROVIDER } from '../database/database.provider';
import * as mysql from 'mysql2/promise';
import axios from 'axios';

@Injectable()
export class SyncService {
  constructor(
    @Inject(DATABASE_PROVIDER) private connection: mysql.Connection,
  ) {}

  async syncData() {
    try {
      // Tu lógica existente de sincronización aquí
      const response = await axios.get('https://moriahmkt.com/iotapp/test/');
      console.log('Respuesta de la API:', response.data);

      const parcelas = response.data.parcelas;
      const sensoresGenerales = response.data.sensores;

      // ... resto de tu lógica de syncData actual
      
      console.log('Sincronización completada.');
      return { success: true, message: 'Sincronización completada.' };
    } catch (error) {
      console.error('Error al sincronizar los datos:', error);
      throw error;
    }
  }
}