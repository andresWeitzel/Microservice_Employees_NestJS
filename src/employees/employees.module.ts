import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EmployeesProviders } from './employees.providers';
import { GetAllEmployeesService } from './services/get-all.service';
import { GetAllEmployeesController } from './controllers/get-all.controller';
import { GetByIdEmployeesController } from './controllers/get-by-id.controller';
import { GetByIdEmployeesService } from './services/get-by-id.service';
import { CreateEmployeesController } from './controllers/create.controller';
import { CreateEmployeesService } from './services/create.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    //Providers
    ...EmployeesProviders,
    //Services
    GetAllEmployeesService,
    GetByIdEmployeesService,
    CreateEmployeesService,
  ],
  controllers: [
    GetAllEmployeesController,
    GetByIdEmployeesController,
    CreateEmployeesController,
  ],
})
export class EmployeesModule {}
