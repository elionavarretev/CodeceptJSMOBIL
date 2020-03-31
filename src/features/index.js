const utils = require('./../utils/utils');
let steps = utils.fnGetFiles('./src/features', '.steps.js');

let config = {
  ambiente: 'CERTIFICACION',  
  platform: 'Android',
  device: 'emulator',
  desiredCapabilities: {
    appPackage: 'biz.belcorp.consultoras.esika',
    appActivity: 'biz.belcorp.consultoras.feature.auth.login.LoginActivity',    
    udid: 'emulator-5554', 
  },
};

module.exports.steps = [...steps];
module.exports.config = config;
module.exports.appPackage = config.desiredCapabilities.appPackage;