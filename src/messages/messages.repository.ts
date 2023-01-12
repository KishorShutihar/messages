import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string): Promise<string> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<string[]> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string): Promise<void> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    let id = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let index = 0; index < 10; index++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
