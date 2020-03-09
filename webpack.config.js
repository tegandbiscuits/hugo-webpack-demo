const path = require('path');

module.exports = {
  entry: [path.resolve('src', 'js', 'app.js')],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
};
