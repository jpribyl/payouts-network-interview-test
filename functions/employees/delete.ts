import { APIGatewayEvent } from 'aws-lambda';
import Employee from '../../models/employee.ts';

export const deleteEmployee = async function(
  event: APIGatewayEvent
): Promise<any> {
  const body = event.pathParameters
  console.log(event);
  try {
    const r = await Employee.query()
      .patch({ status: 'inactive' })
      .where('id', body.id);

    return {
      status: 200,
      body: 'User deactivated',
    };
  } catch (e) {
    console.log(e);
    return {
      status: 400,
      body: 'error: ' + e,
    };
  }
};
