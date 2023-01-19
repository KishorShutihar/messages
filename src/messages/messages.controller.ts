import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    //Donot do this in real app use dependency injection
    this.messagesService = new MessagesService();
  }
  //list all the messages
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  //get a sparticular message
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      const err = new NotFoundException('Message not found');
      return err.message;
    }
    return message;
  }

  //create a message
  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    try {
      await this.messagesService.create(body.content);
      return 'Successfully created';
    } catch (error) {
      return error.message;
    }
  }
}
