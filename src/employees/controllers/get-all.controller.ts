import { Controller, Get } from "@nestjs/common";
import { GetAllEmployeesService } from "../services/get-all.service";
import { Employee } from ".././entities/employee.entity";

@Controller("employees")
export class GetAllEmployeesController {
  constructor(
    private readonly getAllEmployeesService: GetAllEmployeesService
  ) {}

  /**
   * @description Controller function to get a paginated listing of all employees.
   * @param {number} pageNro number type
   * @param {number} pageSize number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns an object with the employees paginated list
   */
  @Get("/list")
  async getAll(
    pageNro: number,
    pageSize: number,
    orderBy: string,
    orderAt: string
  ): Promise<Employee[]> {
    try {
      return await this.getAllEmployeesService.findAll(
        pageNro,
        pageSize,
        orderBy,
        orderAt
      );
    } catch (error) {
      console.log(
        `Error in getAll function for  GetAllEmployeesController class. Caused by ${error}`
      );
    }
  }
}
