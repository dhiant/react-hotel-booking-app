import dotenv from "dotenv";

dotenv.config();

const key = process.env.VIGENERE_CIPHER_KEY;
const keyLength = key.length;

// Function to encrypt plaintext using Vigenère Cipher
export function vigenereCipherEncrypt(plaintext) {
	const ASCII_VALUE_OF_A = "A".charCodeAt(0);
	let ciphertext = ""; // Initialize an empty string to store the ciphertext

	// Loop through each character of the plaintext
	for (let i = 0; i < plaintext.length; i++) {
		let char = plaintext[i]; // Current character of the plaintext
		let keyChar = key[i % keyLength]; // Current character of the key, repeating if necessary

		// Check if the character is alphabetic
		if (char.match(/[a-z]/i)) {
			const isUpper = char === char.toUpperCase(); // Check if the character is uppercase
			const code = char.toUpperCase().charCodeAt(0); // ASCII code of the character, converted to uppercase
			const shift = keyChar.toUpperCase().charCodeAt(0) - ASCII_VALUE_OF_A; // Calculate the shift value based on the key

			// Apply the Vigenère Cipher encryption formula
			const shifted = String.fromCharCode(
				((code - ASCII_VALUE_OF_A + shift) % 26) + ASCII_VALUE_OF_A
			);
			// Append the encrypted character to the ciphertext, preserving case
			ciphertext += isUpper ? shifted : shifted.toLowerCase();
		} else {
			// Append non-alphabetic characters unchanged to the ciphertext
			ciphertext += char;
		}
	}
	// Return the encrypted ciphertext
	return ciphertext;
}
