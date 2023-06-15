import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum, IsEmail } from 'class-validator';
import { CoreEntity } from 'src/common/entity/common-core.entity';
import { Column, Entity } from 'typeorm';

enum AdminRole {
  Master,
  Memeber,
  Guest,
}

registerEnumType(AdminRole, { name: 'AdminRole' });

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Admin extends CoreEntity {
  @Column()
  @Field((type) => String)
  @IsEmail()
  email: string;

  @Column()
  @Field((type) => String)
  password: string;

  @Column({ type: 'enum', enum: AdminRole })
  @Field((type) => AdminRole)
  @IsEnum(AdminRole)
  role: AdminRole;

  @Column({ default: 'unknown' })
  @Field((type) => String)
  organization: string;

  @Column({ default: false })
  @Field((type) => Boolean)
  verified: boolean;
}
