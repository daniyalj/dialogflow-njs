var request = require('request');

request.get({
  headers: {'User-Agent' : 'daniyalj'},
  url:     'https://api.github.com/repos/daniyalj/ga-hello-world/issues',
}, function(error, response, body){
  //console.log(body);
  var parsed = JSON.parse(body);
  console.log(body);
})
;
