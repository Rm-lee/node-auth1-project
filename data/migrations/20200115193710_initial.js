
exports.up = async function(knex) {
  await knex.schema.createTable("user", (table) => {
    table.increments("id")
    table.string("user").notNullable()
    table.string("passowrd").notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("user")
};
