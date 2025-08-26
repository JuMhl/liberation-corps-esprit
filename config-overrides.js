const webpack = require('webpack');

module.exports = function override(config) {
  // Ajoutez notre nouvelle règle pour les fichiers markdown
  config.module.rules.push({
    test: /\.md$/,
    type: 'asset/source'
  });

  // Configuration du fallback pour buffer
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve('buffer/')
  };

  // Ajout du plugin buffer
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  );

  return config;
};
