import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from "@nestjs/common";
  import { GetAllEmployeesService } from "../services/get-all.service";
  import { CreateEmployeeDto } from ".././dto/create-employee.dto";
  import { UpdateEmployeeDto } from ".././dto/update-employee.dto";
  import { Employee } from ".././entities/employee.entity";

  
  @Controller("employees")
  export class GetAllEmployeesController {
    constructor(private readonly getAllEmployeesService: GetAllEmployeesService) {}
  
    // @Post()
    // create(@Body() createEmployeeDto: CreateEmployeeDto) {
    //   return this.employeesService.create(createEmployeeDto);
    // }
  
    // @Get()
    // findAll() {
    //   return this.employeesService.findAll();
    // }
  
    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //   return this.employeesService.findOne(+id);
    // }
  
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    //   return this.employeesService.update(+id, updateEmployeeDto);
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.employeesService.remove(+id);
    // }
  
    @Get("/list")
    async getAllEmployees(): Promise<Employee[]> {
      try {
        return await this.getAllEmployeesService.getAll();
      } catch (error) {
        console.log(`Error in getAllEmployees ontroller. Caused by ${error}`);
      }
    }
  }
  