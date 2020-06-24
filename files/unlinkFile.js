var fs = require('fs');

fs.unlink('imdb_test.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});