exports.up = async function(knex) {

    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    return knex.schema
        .createTable('chat', function(table) {
            table.uuid('id', 255).primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('name', 255).notNullable();
        }
    )
}

exports.down = function(knex) {
    return knex.schema.dropTable('chat')
}