
'use strict';

const users = [
  { id: 1, email: 'admin@example.com', password: 'password123', name: 'Admin User' },
];

function findUserByEmail(email) {
  return users.find((u) => u.email === email) || null;
}

function validateCredentials(email, password) {
  const user = findUserByEmail(email);
  if (!user) return null;
  if (user.password !== password) return null;
  return { id: user.id, email: user.email, name: user.name };
}

function getAllUsers() {
  return users.map(({ id, email, name }) => ({ id, email, name }));
}

module.exports = { findUserByEmail, validateCredentials, getAllUsers };