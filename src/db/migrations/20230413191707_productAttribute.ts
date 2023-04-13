import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('productAttributes', table => {
        table.bigInteger('product_id').unsigned().notNullable();
        table.foreign('product_id').references('products.id').onDelete('CASCADE');
        table.bigInteger('attribute_id').unsigned().notNullable();
        table.foreign('attribute_id').references('attributes.id').onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('productAttributes');
}

