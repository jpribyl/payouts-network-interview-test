import { Model } from 'objection';
import knex from '../configs/dbConfig.ts';
const { Model } = require('objection');

// Give the knex instance to objection.
Model.knex(knex);

export default Model;
