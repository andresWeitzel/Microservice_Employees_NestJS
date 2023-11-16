import { Controller, Get, Query } from "@nestjs/common";
import { GetAllEmployeesService } from "../services/get-all.service";
import { Employee } from ".././entities/employee.entity";

@Controller("employees")
export class GetAllEmployeesController {
  constructor(
    private readonly getAllEmployeesService: GetAllEmployeesService
  ) {}

  /**
   * @description Controller function to get a paginated listing of all employees.
   * @param {number} pageNroParam number type
   * @param {number} pageSizeParam number type
   * @param {string} orderByParam string type
   * @param {string} orderAtParam string type
   * @returns an object with the employees paginated list
   */
  @Get("/list")
  async getAll(
    @Query('pageNro') pageNroParam: number,
    @Query('pageSize') pageSizeParam: number,
    @Query('orderBy') orderByParam: string,
    @Query('orderAt') orderAtParam: string,
  ): Promise<Employee[]> {
    try {
      return await this.getAllEmployeesService.findAll(
        pageNroParam,
        pageSizeParam,
        orderByParam,
        orderAtParam
      );
    } catch (error) {
      console.log(
        `Error in getAll function for  GetAllEmployeesController class. Caused by ${error}`
      );
    }
  }
}
