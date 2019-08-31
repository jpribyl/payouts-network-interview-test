import { APIGatewayEvent } from 'aws-lambda';
import knex from '../../configs/dbConfig.ts';

export const getEmployees = async function(
  event: APIGatewayEvent
): Promise<any> {
  console.log(event);

  const { page } = { ...event.queryStringParameters };
  const r = await knex('employees').paginate(page);

  return {
    statusCode: 200,
    body: JSON.stringify(r),
    headers: {},
    isBase64Encoded: false,
  };
};
