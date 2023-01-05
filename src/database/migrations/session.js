exports.up = async function(knex) {

    return knex.schema
        .createTable('session', function(table) {
            table.string('token', 255).primary().notNullable()
            table.uuid('userId', 255).primary().notNullable()
            table.time('expiration', { precision: 6 })
        }
    )
}

exports.down = function(knex) {
    return knex.schema.dropTable('session')
}

