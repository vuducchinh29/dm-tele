import crypto from 'crypto';

async function SHA256(data) {
  data = new Uint8Array(data);

  const hash = crypto.createHash('sha256');

  hash.update(data);

  return new Uint8Array(hash.digest());
}

export { SHA256 };
