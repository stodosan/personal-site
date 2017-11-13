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
  return "Me using deploy script";
}

function deployToGit(cred) {
  git().add('.')
    .commit(randomId())
}

// const git = require('simple-git/promise');
// const remote = `https://${USER}:${PASS}@${REPO}`;
//
// git().silent(true)
//   .clone(remote)
//   .then(() => console.log('finished'))
//   .catch((err) => console.error('failed: ', err));
