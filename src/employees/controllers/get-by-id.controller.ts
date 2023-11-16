import { Controller, Get, Param } from "@nestjs/common";

import { Employee } from ".././entities/employee.entity";
import { GetByIdEmployeesService } from "../services/get-by-id.service";

@Controller("employees")
export class GetByIdEmployeesController {
  constructor(
    private readonly getByIdEmployeesService: GetByIdEmployeesService
  ) {}

  /**
   * @description Controller to get a employee according to the id passed as a parameter
   * @param {number} inputIdParam number type
   * @returns a response with the product and status code
   */
  @Get('/id/:inputIdParam')
  async getById(
    @Param('inputIdParam') inputIdParam: number
  ): Promise<Employee> {
    try {
      return await this.getByIdEmployeesService.findById(
        inputIdParam
      );
    } catch (error) {
      console.log(
        `Error in getById function for  GetByIdEmployeesController class. Caused by ${error}`
      );
    }
  }
}
