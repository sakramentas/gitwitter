if (process.env.NODE_ENV !== 'production') {
  require('babel-register')({
    presets: [
      [
        require.resolve('babel-preset-env'),
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: [require.resolve('babel-plugin-transform-object-rest-spread')],
    ignore: [/node_modules/],
    babelrc: false,
  });
}

require('dotenv').config();

require('./src');
