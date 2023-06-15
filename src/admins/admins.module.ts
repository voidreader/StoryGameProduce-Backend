import { Module } from '@nestjs/common';
import { AdminResolver } from './admins.resolver';
import { AdminService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminResolver, AdminService],
  exports: [AdminService],
})
export class AdminsModule {}
