import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { EmployeesProviders } from "./employees.providers";
import { GetAllEmployeesService } from "./services/get-all.service";
import { GetAllEmployeesController } from "./controllers/get-all.controller";
import { GetByIdEmployeesController } from "./controllers/get-by-id.controller";
import { GetByIdEmployeesService } from "./services/get-by-id.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    //Providers
    ...EmployeesProviders,
    //Services
    GetAllEmployeesService,
    GetByIdEmployeesService,
  ],
  controllers: [GetAllEmployeesController, GetByIdEmployeesController],
})
export class EmployeesModule {}
