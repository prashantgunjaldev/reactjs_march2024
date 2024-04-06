import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { QueryDto } from 'src/dto/query';

@Injectable()
export class QueryService {
  data: QueryDto[];
  constructor() {
    this.data = JSON.parse(
      readFileSync(join(process.cwd(), 'src/data/queries.json'), 'utf-8'),
    );
  }

  async create(createQueryDto: QueryDto): Promise<QueryDto> {
    this.data.push({ _id: Math.random(), ...createQueryDto });
    return this.data[this.data.length - 1];
  }

  async findAll(): Promise<QueryDto[]> {
    return this.data;
  }

  async delete(id: number): Promise<any> {
    this.data = this.data.filter((d) => d._id != id);
  }

  async update(id: number, courseDto: QueryDto) {
    const index = this.data.findIndex((d) => d._id == id);
    this.data[index] = { ...courseDto };
    return this.data[index];
  }
}
