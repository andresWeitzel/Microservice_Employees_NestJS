/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Employee } from './entities/employee.entity';

export const EmployeesProviders = [
  {
    provide: 'EMPLOYEES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Employee),
    inject: ['DATA_SOURCE'],
  },
];