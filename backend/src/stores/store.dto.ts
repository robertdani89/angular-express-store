import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

class Rating {
  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @IsNotEmpty()
  @IsString()
  comment: string;
}

export class StoreDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;

  @IsArray()
  keywords: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Rating)
  ratings: Rating[];
}
