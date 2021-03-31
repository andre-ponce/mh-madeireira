const { name, version } = require('../../../package.json');

export default (req, res) => {
  res.json({ name, version });
};
