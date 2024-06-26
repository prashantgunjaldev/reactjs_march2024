import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { QueryService } from './query.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { QueryDto } from 'src/dto/query';

@Controller('query')
export class QueryController {
  constructor(private service: QueryService) {}
  @UseGuards(AuthGuard)
  @Get()
  async get(): Promise<QueryDto[]> {
    return await this.service.findAll();
  }

  @Post()
  async post(@Body() course: QueryDto): Promise<QueryDto> {
    return await this.service.create(course);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async delete(@Param() param): Promise<QueryDto> {
    return await this.service.delete(param.id);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async update(@Param() param, @Body() course: QueryDto) {
    return await this.service.update(param.id, course);
  }
}
