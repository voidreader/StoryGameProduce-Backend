import { Field } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/common-output.dto';

export class AdminLoginOutput extends CoreOutput {
  @Field((type) => String, { nullable: true })
  token?: string;
}
