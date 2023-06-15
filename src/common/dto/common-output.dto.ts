import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreOutput {
  @Field((type) => String, { nullable: true })
  error?: string; // 에러 메세지 필드

  @Field((type) => Boolean)
  success: boolean = false; // 성공여부
}
