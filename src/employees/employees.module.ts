import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatabaseModule } from 'src/database/database.module';
import { EmployeesProviders } from './employees.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...EmployeesProviders,EmployeesService],
  controllers: [EmployeesController]
})
export class EmployeesModule {}
