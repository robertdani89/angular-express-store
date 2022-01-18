import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BadRequestError } from 'src/common/errors';
import { RatingDto, StoreDto } from './store.dto';
import { Store } from './store.scema';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) { }

  @Post()
  async create(@Body() data: StoreDto) {
    return await this.storesService.create(data);
  }

  @Get('')
  async findAll(): Promise<Store[]> {
    return await this.storesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Store> {
    return await this.storesService.findOne({ _id: id });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: StoreDto): Promise<Store> {
    const record = await this.storesService.findOne({ _id: id });
    if (!record) throw new BadRequestError();
    return await this.storesService.updateOne(record, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const record = await this.storesService.findOne({ _id: id });
    if (!record) throw new BadRequestError();
    return await this.storesService.remove(record);
  }

  @Post(':id/comment')
  async createComment(@Param('id') id: string, @Body() data: RatingDto) {
    return await this.storesService.createComment(id, data);
  }
}
