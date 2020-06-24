var fs = require('fs');

fs.rename('imdb.txt', 'imdb_test.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});