import CryptoJS from 'crypto-js';
import * as dotenv from 'dotenv';

dotenv.config();

const secretKey: string = process.env.CRYPTO_SECRET_KEY || 'defaultSecretKey';

export function encrypt(text: string): string {
  const encryptedText = CryptoJS.AES.encrypt(text, secretKey).toString();
  return encryptedText;
}

export function decrypt(encryptedText: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedText;
}