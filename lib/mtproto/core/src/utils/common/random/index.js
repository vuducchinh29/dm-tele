import crypto from 'crypto';

function getRandomBytes(length) {
  return new Uint8Array(crypto.randomBytes(length));
}

export { getRandomBytes };
