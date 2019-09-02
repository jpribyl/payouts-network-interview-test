import { APIGatewayEvent } from 'aws-lambda';
import Employee from '../../models/employee.ts';

export const deleteEmployee = async function(
  event: APIGatewayEvent
): Promise<any> {
  const body = event.pathParameters;
  //console.log(event);
  try {
    const r = await Employee.query()
      .patch({ status: 'inactive' })
      .where('id', body.id);

    return {
      statusCode: 200,
      body: 'User deactivated',
      headers: {},
      isBase64Encoded: false,
    };
  } catch (e) {
    //console.log(e);
    return {
      statusCode: 400,
      body: 'error: ' + e,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH,DELETE',
      },
      isBase64Encoded: false,
    };
  }
};
