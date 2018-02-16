/**
 * Created by spirit on 16.02.18.
 */

let argv = require('minimist')(process.argv.slice(2));
let root = process.cwd();

let config = {};

config.init = function (params) {

    let paramPath = params.path || 'configs';
    let paramDefault = params.default || 'release';
    let configName = argv.config || paramDefault;

    let filePath = `${root}/${paramPath}/${configName}.json`;
    let configFile = {};

    try {
        configFile = require(filePath);
    } catch (e) {
        console.error("flexconf: Config file not found:", filePath);
    }

    for (let key in configFile) {
        config[key] = configFile[key];
    }

    for (let key in argv) {
        if(key !== '_')
            config[key] = argv[key];
    }

};

module.exports = config;