const url = require('url')

const adress = 'https://www.google.com/search?q=ds&oq=ds&aqs=chrome..69i57j0i433i512l3j0i131i433i512j0i433i512l2j46i433i512j0i433i512j46i175i199i433i512.1099j0j7&sourceid=chrome&ie=UTF-8';

const parsedUrl = url.parse(adress,true);

console.log(parsedUrl.host)

console.log(parsedUrl.pathname);
console.log(parsedUrl.query.month);