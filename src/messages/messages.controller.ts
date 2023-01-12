import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  //create a message
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
