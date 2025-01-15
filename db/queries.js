import pg from 'pg';
import 'dotenv/config';

const { Client } = pg;
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export async function connectClient() {
  try {
    await client.connect();
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

async function createDatabase(dbName) {
  try {
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`Database ${dbName} created successfully!`);
  } catch (err) {
    console.error('Error creating database:', err);
  }
}

async function createTable(tableName) {
  const createTableQuery = `
    CREATE TABLE ${tableName} (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      message VARCHAR(255),
      date TIMESTAMP
    )
  `;

  try {
    await client.query(createTableQuery);
    console.log(`Table ${tableName} created successfully.`);
  } catch (err) {
    console.error('Error creating table:', err);
  }
}
const values = [
  'David',
  'This is the message for david',
  '2025-01-16 10:00:00',
];

async function insertData(values) {
  const query = `INSERT INTO messages (name, message, date)
  VALUES 
  ($1, $2, $3),
  ($4, $5, $6),
  ($7, $8, $9)
  `;
  try {
    client.query(query, values);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error adding the values: ', err);
  }
}

export async function showTable(tableName) {
  const selectQuery = `SELECT * FROM ${tableName}`;

  try {
    const result = await client.query(selectQuery);
    const rows = result.rows;
    return rows;
  } catch (err) {
    console.error('Error showing table:', err);
  }
}

export async function getData() {
  const selectQuery = `SELECT * FROM messages`;
  const result = await client.query(selectQuery);
  const rows = result.rows;
  return rows;
}

async function listDatabases() {
  try {
    const result = await client.query(
      'SELECT datname FROM pg_database WHERE datistemplate = false;'
    );
    console.log('Databases:', result.rows);
  } catch (err) {
    console.error('Error listing databases:', err);
  }
}

async function deleteDatabase(dbName) {
  const deleteClient = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await deleteClient.connect();
    await deleteClient.query(`DROP DATABASE ${dbName}`);
    console.log(`Database ${dbName} deleted successfully.`);
  } catch (err) {
    console.error('Error deleting database:', err);
  } finally {
    await deleteClient.end();
  }
}

(async () => {
  // await connectClient();
  // Uncomment the desired function calls
  // await createDatabase('MiniMessageBoard');
  // await createTable('messages');
  // await insertData(values);
  // await showTable('messages');
  // await listDatabases();
  // await deleteDatabase('MiniMessageBoard');
  // await client.end(); // Ensure the main client is closed after operations
})();

export default client;
