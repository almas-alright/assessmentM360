import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categories', table => {
        table.bigIncrements('id').primary();
        table.string('name').notNullable();
        table.bigInteger('parent_id').nullable();
        table.boolean('status').defaultTo(true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('categories');
}

// id (primary key)
// name
// parent_category_id (foreign key, nullable)
// status (active/inactive)
