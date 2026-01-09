import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("students", (table) => {
        table.boolean("is_deleted").defaultTo(false).after("updated_at")
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable("students", (table) => {
        table.dropColumn("is_deleted")
    })
}

