import { Injectable, Inject } from '@nestjs/common';
import { Employee } from '.././entities/employee.entity';
import { Repository } from 'typeorm';
import { validateCreateObject } from '../helpers/validations/dto/validate-object';
import { CreateEmployeeDto } from '../dto/create-employee.dto';

@Injectable()
export class CreateEmployeesService {
  constructor(
    @Inject('EMPLOYEES_REPOSITORY')
    private employeeRepository: Repository<Employee>,
  ) {}

  /**
   * @description Service to get a employee according to id
   * @param {CreateEmployeeDto} employee CreateEmployeeDto type
   * @returns an object with the product
   */
  async createEmployee(employee: CreateEmployeeDto): Promise<Employee> {
    try {
      //-- start with validation object  ---
      const validateObject = await validateCreateObject(employee);
      if (validateObject.length) {
        return validateObject;
      }
      //-- end with validation object  ---
      const newEmployee = this.employeeRepository.create(employee);

      return await this.employeeRepository.save(newEmployee);
    } catch (error) {
      console.log(`Error in createEmployee service. Caused by ${error}`);
    }
  }
}
