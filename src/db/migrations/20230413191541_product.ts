import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', table => {
        table.bigIncrements('id').primary();
        table.string('title').notNullable();
        table.text('description');
        table.boolean('status').defaultTo(true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}

