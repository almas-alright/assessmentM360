import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex("attributes").truncate();

    // Inserts seed entries
    await knex("attributes").insert([
        { name: "color" },
        { name: "size" },
        { name: "weight" }
    ]);
};
