import { APIGatewayEvent } from 'aws-lambda';
import knex from '../../configs/dbConfig.ts';
import Employee from '../../models/employee.ts';
import Validate from '../../models/validator.ts';

export const postEmployee = async function(
  event: APIGatewayEvent
): Promise<any> {
  const body = JSON.parse(event.body);

  const validationStatus = await Validate(Employee, body);

  if (validationStatus.status === 'success') {
    const r = await Employee.query().insert(body);

    return {
      statusCode: 200,
      body: JSON.stringify(r),
      headers: {},
      isBase64Encoded: false,
    };
  } else {
    return validationStatus.response;
  }
};
