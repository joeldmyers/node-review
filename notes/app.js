console.log('starting app');

const fs = require('fs');

fs.appendFileSync('greetings.txt', 'Hello World');
