import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BuildingsModule } from './buildings/buildings.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { NeighborsModule } from './neighbors/neighbors.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.development'], isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.CONNECTION_STRING,
      }),
    }),
    TaskModule,
    UserModule,
    BuildingsModule,
    OrganizationsModule,
    NeighborsModule,
    VehiclesModule,
  ],
})
export class AppModule {}
