exports.dates = './dates';
exports.intents = './intents';
exports.locations = './locations';

if (require.main === module) {
  const path = require('path');
  const fs = require('fs');
  const util = require('util');
  const intentLocation = path.join(__dirname, exports.intents);
  const domains = fs.readdirSync(intentLocation);
  const intents = {};
  domains.forEach(domain => {
    intents[domain] = fs.readdirSync(path.join(intentLocation, domain));
    // open each file and check if correct JSON file
    intents[domain].forEach(action => require(path.join(intentLocation, domain, action)));
    intents[domain] = intents[domain].map(action => action.replace('.json', '').replace('-', ' '))
  });
  console.log('intents\n', util.inspect(intents, { colors: true, depth: null }));
}
