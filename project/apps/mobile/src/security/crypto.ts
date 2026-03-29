import crypto from 'crypto';

const AES_KEY = crypto.createHash('sha256').update('CHANGE_ME_VIA_SECURE_STORE').digest();
const IV_LENGTH = 16;

export function encryptPayload(payload: object): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', AES_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(payload), 'utf8'), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function signWithRsa2048(payload: string, privateKeyPem: string): string {
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(payload);
  signer.end();
  return signer.sign(privateKeyPem, 'base64');
}
