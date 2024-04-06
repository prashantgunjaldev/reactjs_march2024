import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { UserDTO } from 'src/dto/user';

@Injectable()
export class UsersService {
  data: UserDTO[];
  constructor() {
    this.data = JSON.parse(
      readFileSync(join(process.cwd(), 'src/data/users.json'), 'utf-8'),
    );
  }

  async findAll(): Promise<UserDTO[]> {
    return this.data;
  }

  async findOne(username: string): Promise<UserDTO | undefined> {
    return this.data.find((user) => user.username === username);
  }
}
