import dotenv from "dotenv";

dotenv.config();

const key = process.env.VIGENERE_CIPHER_KEY;
const keyLength = key.length;

export function vigenereCipherEncrypt(plaintext) {
	const ASCII_VALUE_OF_A = "A".charCodeAt(0);
	let ciphertext = "";


	for (let i = 0; i < plaintext.length; i++) {
		let char = plaintext[i];
		let keyChar = key[i % keyLength];

	
		if (char.match(/[a-z]/i)) {
			const isUpper = char === char.toUpperCase();
			const code = char.toUpperCase().charCodeAt(0);
			const shift = keyChar.toUpperCase().charCodeAt(0) - ASCII_VALUE_OF_A;

		
			const shifted = String.fromCharCode(
				((code - ASCII_VALUE_OF_A + shift) % 26) + ASCII_VALUE_OF_A
			);
		
			ciphertext += isUpper ? shifted : shifted.toLowerCase();
		} else {
		
			ciphertext += char;
		}
	}

	return ciphertext;
}
