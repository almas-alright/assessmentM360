import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('attributes', table => {
        table.bigIncrements('id').primary();
        table.string('name').unique().notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('attributes');
}

