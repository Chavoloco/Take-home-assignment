import crypto from 'crypto';

const secretKey = process.env.SECRET_KEY

Cypress.Commands.add('encrypt', (data) => {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey)
  let encryptedData = cipher.update(data, 'utf-8', 'hex')
  console.log(encryptedData += cipher.final('hex'));
  return encryptedData += cipher.final('hex')
})

Cypress.Commands.add("decrypt", (data) => {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decryptedData = decipher.update(data, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');
})