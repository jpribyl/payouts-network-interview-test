exports.up = function(knex) {
  return knex.schema.table('employees', table => {
    //put new columns or tables in migrations like this
    //table.string('idea');
  });
};

exports.down = function(knex) {
  return knex.schema.table('employees', table => {
    //undo the changes made above like this
    //table.dropColumn('idea');
  });
};
