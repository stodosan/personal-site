const git = require('simple-git');
const USER = 'something';

const fs = require('fs');
fs.readFile('./credentials.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  deployToGit(JSON.parse(data));
});

function randomId() {
  return "Me using deploy script: " + (new Date().toLocaleString());
}

function deployToGit(cred) {
  git().silent(true).add('.')
    .commit(randomId())
    .push('origin', 'master', (err) => {
      if(err) {
        console.error('Failed to deploy:', err);
      } else {
        console.info('Deployed!');
      }
    });
}

// const git = require('simple-git/promise');
// const remote = `https://${USER}:${PASS}@${REPO}`;
//
// git().silent(true)
//   .clone(remote)
//   .then(() => console.log('finished'))
//   .catch((err) => console.error('failed: ', err));
