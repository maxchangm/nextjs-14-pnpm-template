/**
 * This file is used to define the schema of the database using drizzle ORM.
 *
 * Example:
 * import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

   export const users = pgTable('users', {
     id: serial('id').primaryKey(),
     fullName: text('full_name'),
     phone: varchar('phone', { length: 256 }),
   });
 */
