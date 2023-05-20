import crypto from 'crypto';

function createHash(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

const password = 'FERIT';
const hashedPassword = createHash(password);
console.log(hashedPassword);