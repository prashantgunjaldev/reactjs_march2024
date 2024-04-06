import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { CreateCourseDto } from 'src/dto/course';

@Injectable()
export class CourseService {
  data: CreateCourseDto[];
  constructor() {
    this.data = JSON.parse(
      readFileSync(join(process.cwd(), 'src/data/courses.json'), 'utf-8'),
    );
  }

  async create(createCourseDto: CreateCourseDto): Promise<CreateCourseDto> {
    this.data.push({ _id: Math.random(), ...createCourseDto });
    return this.data[this.data.length - 1];
  }

  async findAll(): Promise<CreateCourseDto[]> {
    return this.data;
  }

  async findOne(id: number): Promise<CreateCourseDto> {
    return this.data.find((user) => user._id == id);
  }

  async delete(id: number): Promise<any> {
    this.data = this.data.filter((d) => d._id != id);
  }

  async update(id: number, courseDto: CreateCourseDto) {
    const index = this.data.findIndex((d) => d._id == id);
    this.data[index] = { ...this.data[index], ...courseDto };
    return this.data[index];
  }
}
