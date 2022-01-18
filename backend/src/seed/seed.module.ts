import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from 'src/stores/store.scema';
import { SeedService } from './seed.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Stores', schema: StoreSchema }])],
  providers: [SeedService]
})
export class SeedModule {}
