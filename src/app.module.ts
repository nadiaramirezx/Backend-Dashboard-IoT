// filepath: src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatosSensoresModule } from './datos-sensores/datos-sensores.module';
import { ParcelasBorradasModule } from './parcelas-borradas/parcelas-borradas.module';
import { SensoresModule } from './sensores/sensores.module';
import { ParcelasModule } from './parcelas/parcelas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'iotapp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ParcelasModule,
    DatosSensoresModule,
    ParcelasBorradasModule,
    SensoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}