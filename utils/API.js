const WarzoneAPI = require('warzone-api');
const api = WarzoneAPI();

const authenticate = () => {
  api.login(process.env.EMAIL, process.env.PASSWORD);
};

//Generate session tokens on right away
authenticate();
//Generate new session tokens once an hour
setInterval(authenticate, 1000 * 60 * 60);

module.exports = api;
