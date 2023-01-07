const {readFileSync} = require ('fs');
const load =() => JSON.parse(readFileSync('user.json'));
module.exports={load}