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
      },
      isBase64Encoded: false,
    };
  }
};
