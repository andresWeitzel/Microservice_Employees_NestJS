import { Injectable, Inject } from "@nestjs/common";
import { Employee } from ".././entities/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetAllEmployeesService {
  constructor(
    @Inject("EMPLOYEES_REPOSITORY")
    private employeeRepository: Repository<Employee>
  ) {}

  /**
   * @description Service to get a paginated listing of all employees
   * @param {number} pageNro number type
   * @param {number} pageSize number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns an object with the products paginated list
   */
  async findAll(
    pageNro: number,
    pageSize: number,
    orderBy: string,
    orderAt: string
  ): Promise<Employee[]> {
    try {
      let pageNroParam = 0;
      let pageSizeParam = 20;
      let orderByParam = "id";
      let orderAtParam = "ASC";

      pageNroParam = pageNro != (null || undefined) ? pageNro : pageNroParam;
      pageSizeParam =
        pageSize != (null || undefined) ? pageSize : pageSizeParam;
      orderByParam = orderBy != (null || undefined) ? orderBy : orderByParam;
      orderAtParam = orderAt != (null || undefined) ? orderAt : orderAtParam;

      return await this.employeeRepository.find({
        order: {
          [orderBy]: orderAt,
        },
        skip: pageNro,
        take: pageSize,
      });
    } catch (error) {
      console.log(
        `Error in findAll frunction for GetAllEmployeesService class. Caused by ${error}`
      );
    }
  }
}
