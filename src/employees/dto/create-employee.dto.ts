/* eslint-disable prettier/prettier */
//external
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  Length,
  Max,
  Min,
} from 'class-validator';
//Const
//name field
const NAME_VALUE_FOR_NAME = 'name';
const MIN_VALUE_FOR_NAME = 4;
const MAX_VALUE_FOR_NAME = 40;

export class CreateEmployeeDto {
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_NAME} cannot be empty` })
  @IsString({ message: `The ${NAME_VALUE_FOR_NAME} must be of type string` })
  @Length(MIN_VALUE_FOR_NAME, MAX_VALUE_FOR_NAME, {
    message: `The value of the ${NAME_VALUE_FOR_NAME} must be between ${MIN_VALUE_FOR_NAME} and ${MAX_VALUE_FOR_NAME} characters`,
  })
  name: string;
}
