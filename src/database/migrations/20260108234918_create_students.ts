import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("students", (table) => {
        table.increments("id").primary()
        table.integer("academic_record").notNullable().unique()
        table.string("name").notNullable()
        table.string("email").notNullable()
        table.integer("document").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())
        table.timestamp("deleted_at").defaultTo(knex.fn.now())
        table.string("externalId").notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("students")
}

