import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
  }

  async findOne(id: string) {
    const data = await this.messagesRepo.findOne(id);
    //if instead of try catfch as nothing could go wrong except that the data may not be present and undefined will be rteturned
    return data;
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(content: string) {
    const result = await this.messagesRepo.create(content);
  }
}
