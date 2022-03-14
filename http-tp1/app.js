const request = require("request");

/*
const opts = {
  method: 'POST',
  url: 'https://dev-mi1ybfv7.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"7hS5gDOpNpm9y4T03SIi2Yuw3zi9OGoR","client_secret":"-VGUapxPaHJXbHhwlDJWYZ9EmSotQvr5M9MzLLxaOnWqW2sJODCJ58WTHzuhELsL","audience":"https://test.fr","grant_type":"client_credentials"}'
};

request(opts, (err, res, body) => {
  if (err) throw new Error(err);

  console.log(body);
});
*/

/*const options = { method: 'GET',
  url: 'https://dev-mi1ybfv7.eu.auth0.com/authorize',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: '{"response_type":"token","client_id": "LRq5ktSVLTZdNiwEsyWOZNMs5DXrvMMm","redirect_uri": "https://oauth.pstmn.io/v1/callback"}'
};
*/
/*
const opts = { method: 'GET',
  url: 'https://dev-mi1ybfv7.eu.auth0.com/authorize?response_type=code&client_id=LRq5ktSVLTZdNiwEsyWOZNMs5DXrvMMm&redirect_uri=https://oauth.pstmn.io/v1/callback'
};
*/
/*
const options = { method: 'GET',
  url: 'https://dev-mi1ybfv7.eu.auth0.com/authorize',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: '{"response_type":"token","client_id": "LRq5ktSVLTZdNiwEsyWOZNMs5DXrvMMm","redirect_uri": "https://oauth.pstmn.io/v1/callback"}'
};
*/

// postman://app/oauth2/callback?code=-jKRco7qyPjPJ2Hzn0ddrgh-YD0ZozJyPUe-HibKDz9Hi

//grant_type=authorization_code&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&code=AUTHORIZATION_CODE&redirect_uri=https://YOUR_APP/callback

const opts = { method: 'POST',
  url: 'https://dev-mi1ybfv7.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: '{"grant_type":"authorization_code","client_id": "LRq5ktSVLTZdNiwEsyWOZNMs5DXrvMMm","client_secret": "49904_SPFcCVnsT0DOIsJB-zYfh6lx2FgUtqsK0EXoT5A519kfh_R3Sfh5a1Ek6t", "code":"-jKRco7qyPjPJ2Hzn0ddrgh-YD0ZozJyPUe-HibKDz9Hi"}'
};


request(opts, (err, res, body) => {
  if (err) throw new Error(err);

  //console.log(res);
  console.log(body);
});

