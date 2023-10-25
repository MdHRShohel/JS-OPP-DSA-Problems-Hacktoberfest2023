var Vigenere = (function() {
	var AcharCode = 'A'.charCodeAt(0);
	var ZcharCode = 'Z'.charCodeAt(0);
	var AZlen = ZcharCode - AcharCode + 1;

	function encrypt(text, key, reverse, keepspaces) {
		var plaintext = keepspaces ? text : text.replace(/\s+/g, '');
		var messageLen = plaintext.length;
		var keyLen = key.length;
		var enctext = '';
		var encriptionDir = reverse ? (-1 * AZlen) : 0;

		for (var i = 0; i < messageLen; i++) {
			var plainLetter = plaintext.charAt(i).toUpperCase();
			if (plainLetter.match(/\s/)) {
				enctext += plainLetter;
				continue;
			}

			var keyLetter = key.charAt(i % keyLen).toUpperCase();
			var vigenereOffset = keyLetter.charCodeAt(0) - AcharCode;
			var encLetterOffset = (plainLetter.charCodeAt(0) - AcharCode + Math.abs(encriptionDir + vigenereOffset)) % AZlen;

			enctext += String.fromCharCode(AcharCode + encLetterOffset);
		}

		return enctext;
	}

	return {
		encrypt: function(text, key, keepspaces) {
			return encrypt(text, key, false, keepspaces);
		},

		decrypt: function(text, key, keepspaces) {
			return encrypt(text, key, true, keepspaces);
		}
	};
})();



// Setting up UI
(function() {
	var $key = document.getElementById('key');
	var $palintext = document.getElementById('palintext');
	var $encryptedtext = document.getElementById('encryptedtext');

	var $btnEncript = document.getElementById('btn-encript');
	var $btnDecript = document.getElementById('btn-decript');


	$btnEncript.addEventListener('click', function() {
		var text = Vigenere.encrypt($palintext.value, $key.value, true);
		$encryptedtext.value = text;
	});

	$btnDecript.addEventListener('click', function() {
		var text = Vigenere.decrypt($encryptedtext.value, $key.value, true);
		$palintext.value = text;
	});
})();