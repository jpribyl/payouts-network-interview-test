import { APIGatewayEvent } from 'aws-lambda';
import knex from '../../configs/dbConfig.ts';

export const getEmployees = async function(
  event: APIGatewayEvent
): Promise<any> {
  //console.log(event);

  const { page, perPage, sort, sortDirection } = {
    ...event.queryStringParameters,
  };

  let r;
  if (sort && sortDirection) {
    r = await knex
      .select('employees.*', 'states.abbreviation as state_abbreviation')
      .from('employees')
      .leftJoin('states', 'employees.state_id', 'states.id')
      .orderBy(sort, sortDirection)
      .paginate(page, perPage);
  } else {
    r = await knex
      .select('employees.*', 'states.abbreviation as state_abbreviation')
      .from('employees')
      .leftJoin('states', 'employees.state_id', 'states.id')
      .paginate(page, perPage);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(r),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    isBase64Encoded: false,
  };
};
