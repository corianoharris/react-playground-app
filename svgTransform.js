const path = require("path");

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
