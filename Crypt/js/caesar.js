const userEncodeInput = document.getElementById('userEncodeInput');
const cipherEncodeKey = document.getElementById('cipherEncodeKey');
const cipherEncodeOutput = document.getElementById('cipherEncodeOutput');
const userDecodeInput = document.getElementById('userDecodeInput');
const cipherDecodeKey = document.getElementById('cipherDecodeKey');
const cipherDecodeOutput = document.getElementById('cipherDecodeOutput');
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const caesarCipherEncode = (input, key = 0) => {
	if (input.length === 0) {
		cipherEncodeOutput.innerText = '';
		return;
	}
	const splitInput = input.split('');
	const testMap = splitInput.map(x => {

		if (alphabet.indexOf(x.toLowerCase()) === -1) {

			return ' ';
		}


		let y = parseInt(alphabet.indexOf(x.toLowerCase())) + parseInt(key);

		if (y > 25) {
			if (x === x.toUpperCase()) {
				let output = alphabet[y - 26];
				output = output.toUpperCase();
				return output;
			} else {
				return alphabet[y - 26];
			}
		} else {
			if (x === x.toUpperCase()) {
				let output = alphabet[y];
				output = output.toUpperCase();
				return output;
			} else {
				return alphabet[y];
			}
		}
	});
	cipherEncodeOutput.innerText = testMap.join('');
}

userEncodeInput.oninput = () => {
	caesarCipherEncode(userEncodeInput.value, cipherEncodeKey.value);
}

cipherEncodeKey.oninput = () => {
	caesarCipherEncode(userEncodeInput.value, cipherEncodeKey.value);
}

const caesarCipherDecode = (input, key = 0) => {
	if (input.length === 0) {
		cipherDecodeOutput.innerText = '';
		return;
	}
	const splitInput = input.split('');
	const testMap = splitInput.map(x => {
		if (alphabet.indexOf(x.toLowerCase()) === -1) {
			return ' ';
		}
		let y = parseInt(alphabet.indexOf(x.toLowerCase())) - parseInt(key);
		if (y < 0) {
			if (x === x.toUpperCase()) {
				let output = alphabet[26 + y];
				output = output.toUpperCase();
				return output;
			} else {
				return alphabet[26 + y];
			}

		} else {
			if (x === x.toUpperCase()) {
				let output = alphabet[y];
				output = output.toUpperCase();
				return output;
			} else {
				return alphabet[y];
			}
		}
	});
	cipherDecodeOutput.innerText = testMap.join('');
}

userDecodeInput.oninput = () => {
	caesarCipherDecode(userDecodeInput.value, cipherDecodeKey.value);
}

cipherDecodeKey.oninput = () => {
	caesarCipherDecode(userDecodeInput.value, cipherDecodeKey.value);
}