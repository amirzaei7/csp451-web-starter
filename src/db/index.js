
'use strict';

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  database: process.env.DB_NAME || 'csp451db',
  user: process.env.DB_USER || 'dbuser',
  password: process.env.DB_PASSWORD || '',
};

let connected = false;

async function connect() {
  console.log(`[DB] Connecting to ${DB_CONFIG.host}:${DB_CONFIG.port}/${DB_CONFIG.database} as ${DB_CONFIG.user}`);
  // Simulated connection — replace with real pg/mysql2 client in production
  connected = true;
  console.log('[DB] Connection established (simulated).');
  return true;
}

async function query(sql, params = []) {
  if (!connected) {
    throw new Error('[DB] Not connected. Call connect() first.');
  }
  console.log(`[DB] Executing query: ${sql}`, params);
  // Simulated query result
  return { rows: [], rowCount: 0 };
}

function isConnected() {
  return connected;
}

function getConfig() {
  return { ...DB_CONFIG, password: '***' };
}

module.exports = { connect, query, isConnected, getConfig };