import sqlite3 from 'sqlite3'

export let taskList = []

export function addTask(text) {
    taskList.push(text)
}

export function createDbConnection() {
    const db = new sqlite3.Database("./fish.db", (error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been established");
    return db;
}


export function createTable(db) {
    db.exec(`
  CREATE TABLE sharks
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name   VARCHAR(50) NOT NULL,
    color   VARCHAR(50) NOT NULL,
    weight INTEGER NOT NULL
  );
`);
}

/*
export function select(db) {
    db.exec(`SELECT * FROM sharks WHERE 1=1`);
}
*/
