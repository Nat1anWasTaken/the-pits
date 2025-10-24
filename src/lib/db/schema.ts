import { integer, pgTable, varchar, foreignKey } from 'drizzle-orm/pg-core';

export const boardsTable = pgTable('boards', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull()
});

export const cardsTable = pgTable(
	'cards',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		boardId: integer().notNull(),
		name: varchar({ length: 255 }).notNull(),
		status: varchar({ length: 100 }).notNull(),
		ownerName: varchar({ length: 255 }).notNull()
	},
	(table) => [
		foreignKey({
			columns: [table.boardId],
			foreignColumns: [boardsTable.id]
		})
	]
);
