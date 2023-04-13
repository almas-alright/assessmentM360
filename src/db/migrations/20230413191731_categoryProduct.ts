import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categoryProducts', table => {
        table.bigInteger('category_id').unsigned().notNullable();
        table.foreign('category_id').references('categories.id').onDelete('CASCADE');
        table.bigInteger('product_id').unsigned().notNullable();
        table.foreign('product_id').references('products.id').onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('categoryProducts');
}

