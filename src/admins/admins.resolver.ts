import { Query, Resolver } from '@nestjs/graphql';
import { Admin } from './entity/admin.entity';
import { AdminService } from './admins.service';

@Resolver((of) => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query((returns) => Boolean)
  findMe() {
    return true;
  }
}
