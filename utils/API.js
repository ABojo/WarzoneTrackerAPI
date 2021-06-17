const WarzoneAPI = require('warzone-api');
const api = WarzoneAPI();
const config = require('../auth.config');

const authenticate = () => {
  api.login(config.email, config.password);
};

//Generate session tokens on right away
authenticate();
//Generate new session tokens once an hour
setInterval(authenticate, 1000 * 60 * 60);

module.exports = api;
