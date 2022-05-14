import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseConfigService } from './config/mongoose-config-service';
import { SequelizeConfigService } from './config/sequelize-config-service';
import { UserServiceController } from './user-service.controller';
import { Users } from './user-service.model';
import { UserServiceService } from './user-service.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    SequelizeModule.forRootAsync({
      name: 'development',
      useClass: SequelizeConfigService,
    }),
    SequelizeModule.forFeature([Users], 'development'),
  ],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
