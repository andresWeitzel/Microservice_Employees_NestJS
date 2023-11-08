import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { EmployeesProviders } from "./employees.providers";
import { GetAllEmployeesService } from "./services/get-all.service";
import { GetAllEmployeesController } from "./controllers/get-all.controller";

@Module({
  imports: [DatabaseModule],
  providers: [
    //Providers
    ...EmployeesProviders,
    //Services
    GetAllEmployeesService,
  ],
  controllers: [GetAllEmployeesController],
})
export class EmployeesModule {}
