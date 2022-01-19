import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

export class RatingDto {
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

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsArray()
  keywords: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatingDto)
  ratings: RatingDto[];
}
