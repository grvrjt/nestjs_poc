import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Users } from './user-service.model';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectConnection('development') private readonly sequelize: Sequelize, // access connection by name 'development'
    @InjectModel(Users, 'development')
    private readonly userModel: typeof Users,
  ) {}
  async findAll(): Promise<Users[]> {
    const result = this.userModel.findAll();
    this.sequelize.close();
    return result;
  }

  async create(createUserDto): Promise<Users> {
    return this.userModel.create(<Users>createUserDto);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
