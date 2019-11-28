var request = require('request');

request.get({
  headers: {'User-Agent' : 'daniyalj'},
  url:     'https://api.github.com/repos/daniyalj/ga-hello-world/issues',
}, function(error, response, body){
  //console.log(body)
  if(error){
    new Error('Check your API endpoint ....');
  }else{
    var parsed = JSON.parse(body);
    //console.log(parsed);
    var number115 = parsed[0].number ? parsed[0].number : 'The object property does not exist';
    console.log('FUCK DANI.............. AND BBG ');
    console.log('The number of the latest issue is => ' , number115);
  }
 
});
