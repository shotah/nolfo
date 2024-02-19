/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  /* eslint-disable no-unused-vars */
  process(sourceText, sourcePath, _options) {
    return {
      code: `module.exports = 
     ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
