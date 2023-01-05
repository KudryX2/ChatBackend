exports.up = async function(knex) {

    return knex.schema
        .createTable('chatUser', function(table) {
            table.uuid('chatId', 255).primary().notNullable();
            table.uuid('userId', 255).primary().notNullable();
            table.string('role', 255).notNullable();
        }
    )
}

exports.down = function(knex) {
    return knex.schema.dropTable('chatUser')
}