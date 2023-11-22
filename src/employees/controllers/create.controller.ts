import { Controller, Post, Body } from '@nestjs/common';
import { CreateEmployeesService } from '../services/create.service';
import { Employee } from '.././entities/employee.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';

@Controller('employees')
export class CreateEmployeesController {
  constructor(
    private readonly createEmployeesService: CreateEmployeesService,
  ) {}
  /**
   * @description Controller to add a employee to database
   * @param {CreateEmployeeDto} newEmployee CreateEmployeeDto type
   * @returns a response with the employee
   */
  @Post('/')
  async create(@Body() newEmployee: CreateEmployeeDto): Promise<Employee> {
    try {
      return await this.createEmployeesService.createEmployee(newEmployee);
    } catch (error) {
      console.log(
        `Error in create function for  CreateEmployeesController class. Caused by ${error}`,
      );
    }
  }
}
