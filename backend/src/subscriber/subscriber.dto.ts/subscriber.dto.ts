import {IsNotEmpty, IsNumber} from "class-validator";

export class SubscriberDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
