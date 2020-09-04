const wait = require('./wait');
const process = require('process');
const cp = require('child_process');
const path = require('path');

// test('throws invalid number', async () => {
//   await expect(wait('foo')).rejects.toThrow('milliseconds not a number');
// });

// shows how the runner will run a javascript action with env / stdout protocol
test('show hosts content', () => {
  // process.env['INPUT_HOSTS'] = "12.0.0.1 abc.com";
  // const ip = path.join(__dirname, 'index.js');
  // console.log(`ip: ${INPUT_HOSTS}`)
  console.log(cp.execSync(`cat /etc/hosts`, {env: process.env}).toString());
})
