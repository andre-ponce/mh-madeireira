const {
  name: NAME,
  version: VERSION,
} = require('../../../../package.json');

export default (req, res) => {
  res.json({
    name: NAME,
    version: VERSION,
  });
};
