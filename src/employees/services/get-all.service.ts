import { Injectable, Inject } from '@nestjs/common';
import { Employee } from '.././entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllEmployeesService {
  constructor(
    @Inject('EMPLOYEES_REPOSITORY')
    private employeeRepository: Repository<Employee>,
  ) {}

  /**
   * @description Service to get a paginated listing of all employees
   * @param {number} pageNroParam number type
   * @param {number} pageSizeParam number type
   * @param {string} orderByParam string type
   * @param {string} orderAtParam string type
   * @returns an object with the products paginated list
   */
  async findAll(
    pageNroParam: number,
    pageSizeParam: number,
    orderByParam: string,
    orderAtParam: string,
  ): Promise<Employee[]> {
    try {
      let pageNro = 0;
      let pageSize = 20;
      let orderBy = 'id';
      let orderAt = 'ASC';

      pageNroParam =
        pageNroParam != (null || undefined) ? pageNroParam : pageNro;
      pageSize =
        pageSizeParam != (null || undefined) ? pageSizeParam : pageSize;
      orderBy = orderByParam != (null || undefined) ? orderByParam : orderBy;
      orderAt = orderAtParam != (null || undefined) ? orderAtParam : orderAt;

      return await this.employeeRepository.find({
        order: {
          [orderBy]: orderAtParam,
        },
        skip: pageNroParam,
        take: pageSizeParam,
      });
    } catch (error) {
      console.log(
        `Error in findAll function for GetAllEmployeesService class. Caused by ${error}`,
      );
    }
  }
}
