import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messagenService: MessageService) {}

  @Get()
  async findAll() {
    return this.messagenService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() messageDto) {
    return this.messagenService.create(messageDto);
  }
}
