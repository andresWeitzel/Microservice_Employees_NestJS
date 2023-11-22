/* 
eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
//External
import { validate } from 'class-validator';
import { CreateEmployeeDto } from 'src/employees/dto/create-employee.dto';
//Models

//Const/vars
let stackFieldsErrors: any;

/**
   * @description Validation of all the properties of the Employee class.
   * @param {object} objEmployee object type
   * @returns an array object with the specific errors (constraints) of each class property
   * @example  [
    {
    "message": [
        "The value of the name must be between 4 and 40 characters",
        "The name must be of type string",
        "The name cannot be empty"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
    ]
   */
export const validateCreateObject = async (objEmployee: CreateEmployeeDto) => {
  stackFieldsErrors = [];

  try {
    await validate(objEmployee).then((errors) => {
      errors.map((e) => {
        for (let key in e.constraints) {
          stackFieldsErrors.push(e.constraints[key]);
        }
      });
    });

    return stackFieldsErrors;
  } catch (error) {
    console.error(
      `ERROR in function validateCreateObject(). Caused by ${error} . Specific stack is ${error.stack} `,
    );
  }
};
