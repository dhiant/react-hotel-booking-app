// Implementing node-js built-in "Crypto" module to handle cryptographic functions

const { createCipheriv, createDecipheriv, randomBytes } = await import(
	"node:crypto"
);

// define AES encryption algorithm with 256 bit key length
const algorithm = "aes-256-cbc";
const key = randomBytes(32); // generates 32*8 = 256 bits key
const iv = randomBytes(16); // generates 16*8 = 128 bits initialization vector

export function encrypt(plainText) {
	// initializes a new instance of the Cipher class
	const cipher = createCipheriv(algorithm, key, iv);

	// converts the plaintext to its binary representation using UTF-8 encoding and encrypts it
	let encrypted = cipher.update(plainText, "utf8", "hex");

	// performs any necessary padding and generates the final block of ciphertext
	encrypted += cipher.final("hex");

	return encrypted;
}
