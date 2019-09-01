import { APIGatewayEvent } from 'aws-lambda';
import knex from '../../configs/dbConfig.ts';

export const getStates = async function(event: APIGatewayEvent): Promise<any> {
  //console.log(event);

  const r = await knex.select().from('states');

  return {
    statusCode: 200,
    body: JSON.stringify(r),
    headers: {},
    isBase64Encoded: false,
  };
};
