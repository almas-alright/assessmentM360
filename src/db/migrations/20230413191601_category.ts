import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categories', table => {
        table.bigIncrements('id').primary();
        table.string('name').unique().notNullable();
        table.bigInteger('parent_id').unsigned().nullable();
        table.foreign('parent_id').references('categories.id').onDelete('cascade')
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
