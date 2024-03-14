// Implementing node-js built-in "Crypto" module to handle cryptographic functions

const { createCipheriv } = await import("node:crypto");

// define AES encryption algorithm with 256 bit key length
const algorithm = "aes-256-cbc";

// set fixed values for key and IV
// here we use a Buffer.from() method to convert  the hexadecimal string into raw bytes (binary buffer object)

const key = Buffer.from(process.env.AES_CIPHER_KEY, "hex"); // 32 bytes AES Key
const iv = Buffer.from(process.env.AES_CIPHER_IV, "hex"); // // 16 bytes AES IV

export function encrypt(plainText) {
	// initializes a new instance of the Cipher class
	const cipher = createCipheriv(algorithm, key, iv);

	// converts the plaintext to its binary representation using UTF-8 encoding and encrypts it
	let encrypted = cipher.update(plainText, "utf8", "hex");

	// performs any necessary padding and generates the final block of ciphertext
	encrypted += cipher.final("hex");
	return encrypted;
}
