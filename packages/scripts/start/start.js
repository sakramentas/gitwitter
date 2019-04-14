const nodemon = require('nodemon');
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const init = async () => {
  try {
    const config = {
      script: resolveApp('index.js'),
      restartable: 'rs',
      verbose: true,
      watch: [resolveApp('')],
      ext: 'js json jsx',
      execArgs: [],
    };

    nodemon(config);

    nodemon
      .on('start', () => {
        console.log('Gitwitter server has started');
      })
      .on('quit', async () => {
        console.log('Gitwitter server has quit');
        process.exit();
      })
      .on('restart', (files = []) => {
        console.log(`Gitwitter server has restarted due to: ${files}`);
      });
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  }
};

init();
