const db = require('better-sqlite3')('database.db')

const createUsers = () => {
    const sql = `
        CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
        )
    `
    db.prepare(sql).run()
}

const insertUsers = () => {
    const sql = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `
    db.prepare(sql).run(name, email, password)
}