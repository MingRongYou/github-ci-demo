const fs = require('fs');

const indexPath = './dist/index.html';

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(
    /<script type="module" crossorigin="" src="\/assets\//g,
    '<script type="module" crossorigin="" src="https://mingrongyou.github.io/github-ci-demo/assets/'
  );

  fs.writeFile(indexPath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Script src paths updated successfully!');
  });
});