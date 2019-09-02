import { APIGatewayEvent } from 'aws-lambda';
import Employee from '../../models/employee.ts';

export const patchEmployee = async function(
  event: APIGatewayEvent
): Promise<any> {
  const body = event.pathParameters;
  //console.log(event);
  try {
    const r = await Employee.query()
      .patch({ status: 'active' })
      .where('id', body.id);

    return {
      statusCode: 200,
      body: 'User activated',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      isBase64Encoded: false,
    };
  } catch (e) {
    //console.log(e);
    return {
      statusCode: 400,
      body: 'error: ' + e,
      isBase64Encoded: false,
    };
  }
};
