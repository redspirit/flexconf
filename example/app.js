
let config = require('../index');

config.init({
    path: 'example/configs',
    default: 'release'
});

console.log("my config", config);

