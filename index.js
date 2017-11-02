const isProd = process.env.NODE_ENV === 'production';

module.exports = function devLoader(content) {
  return isProd ? '' : content;
};
