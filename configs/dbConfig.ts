import vars from '../knexfile.js';
var knex = require('knex')({
  client: vars.client,
  connection: {
    ...vars.connection,
  },
  pool: { min: 0, max: 7 },
});

//monkey patch pagination into knex
var KnexQueryBuilder = require('knex/lib/query/builder');
KnexQueryBuilder.prototype.paginate = function(current_page, per_page) {
  var pagination = {};
  //set defaults
  var per_page = per_page || 10;
  var page = current_page || 1;
  //account for silly values
  if (page < 1) page = 1;

  var offset = (page - 1) * per_page;
  return Promise.all([
    //could make this id for performance as long as all tables have an id column
    this.clone()
      .count('* as count')
      .first(),
    this.offset(offset).limit(per_page),
  ]).then(([total, rows]) => {
    var count = total.count;
    var rows = rows;
    pagination.total = count;
    pagination.per_page = per_page;
    pagination.last_page = Math.ceil(count / per_page);
    pagination.current_page = page;
    pagination.data = rows;
    return pagination;
  });
};

export default knex;
