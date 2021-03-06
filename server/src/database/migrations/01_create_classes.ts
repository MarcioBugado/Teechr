import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('technology').notNullable();
        table.decimal('cost').notNullable();
        table.decimal('time').notNullable();
        table.decimal('maxListeners').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
       
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}