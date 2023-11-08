import { Injectable, Inject } from "@nestjs/common";
import { CreateEmployeeDto } from ".././dto/create-employee.dto";
import { UpdateEmployeeDto } from ".././dto/update-employee.dto";
import { Employee } from ".././entities/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetAllEmployeesService {
  constructor(
    @Inject("EMPLOYEES_REPOSITORY")
    private employeeRepository: Repository<Employee>
  ) {}
  // create(createEmployeeDto: CreateEmployeeDto) {
  //   return "This action adds a new employee";
  // }

  // findAll() {
  //   return `This action returns all employees`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} employee`;
  // }

  // update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  //   return `This action updates a #${id} employee`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} employee`;
  // }

  async getAll(): Promise<Employee[]> {
    try {
      return await this.employeeRepository.find({});
    } catch (error) {
      console.log(`Error in getAll frunction for GetAllEmployeesService class. Caused by ${error}`);
    }
  }
}