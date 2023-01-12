import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    //should be avoided
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
      return this.messagesRepo.findOne(id);
    try {
    } catch (error) {
        console.log("hi");
        throw error
    //   throw new Error(`The data for given ${id} not found`);
    }
  }

  findAll() {
      return this.messagesRepo.findAll();
    try {
    } catch (error) {
        throw error
      throw new Error(
        'The database is empty (actually its messages.json that is empty',
      );
    }
  }

  create(content: string) {
      return this.messagesRepo.create(content);
    try {
    } catch (error) {
        throw error
        throw new Error("Unable to add to the database");
        
    }
  }
}
