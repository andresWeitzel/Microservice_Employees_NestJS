import { Injectable, Inject } from '@nestjs/common';
import { Employee } from '.././entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetByIdEmployeesService {
  constructor(
    @Inject('EMPLOYEES_REPOSITORY')
    private employeeRepository: Repository<Employee>,
  ) {}

  /**
   * @description Service to get a employee according to id
   * @param {number} inputIdParam number type
   * @returns an object with the product
   */
  async findById(inputIdParam: number): Promise<Employee> {
    try {
      try {
        let inputId: number;

        inputId = inputIdParam != (null || undefined) ? inputIdParam : inputId;

        return await this.employeeRepository.findOne({
          where: {
            id: inputId,
          },
        });
      } catch (error) {
        console.log(`Error in findById service. Caused by ${error}`);
      }
    } catch (error) {
      console.log(
        `Error in findById function for GetByIdEmployeesService class. Caused by ${error}`,
      );
    }
  }
}
