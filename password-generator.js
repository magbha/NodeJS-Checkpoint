const passGenerator = require('generate-password');

const password = passGenerator.generate({
	length: 10,
	numbers: true,
});

console.log(password);