import crypto from 'crypto';

async function PBKDF2(password, salt, iterations) {
  return crypto.pbkdf2Sync(password, salt, iterations, 64, 'sha512');
}

export { PBKDF2 };
