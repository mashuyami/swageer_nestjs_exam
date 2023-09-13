import { ApiProperty } from '@nestjs/swagger';

export class AdminInput {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
