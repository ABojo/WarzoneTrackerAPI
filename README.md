# warzone-tracker-server

An express server that will return a requested Warzone player's global stats and recent matches.

<h2>Running this code on your own server</h2>

If you want to run this code on your own server you must add valid login information to the auth.config.js file so your server is able to fetch the requested data.

  ```javascript
    // auth.config.js
    
    const config = {
      login: process.env.EMAIL || 'Put your email here',
      password: process.env.PASSWORD || 'Put your password here',
    };
    
    module.exports = config;
  ```

<h2>Get Players Stats</h2>
<ul>
  <li><b>URL</b></li>
  
  /platforms/:platform/usernames/:username
   
   <li><b>Method</b></li>
   
   <code>GET</code>
   
  <li><b>Params</b></li>

  <code>platform= psn, battle, or xbl</code>
  
  <code>username= any valid username</code>
  
  <li><b>Successful Response</b></li>

  ```javascript
  {"status": "success", data: { profile: {... the users global stats}, matches: {... the users recent matches}}
  ```
  
  <li><b>Error Response</b></li>
  
  ```javascript
  {"status": "error", data: { message: "error message"}
  ```
  
   <li><b>Sample call</b></li>
  
  ```javascript
  fetch('yourserver.com/api/platforms/psn/usernames/bojo704').then((response) => {
  //do something with the response
  });
  ```
  

  
  
</ul>
