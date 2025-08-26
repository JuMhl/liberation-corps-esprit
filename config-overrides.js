const webpack = require('webpack');

module.exports = function override(config) {
  // Configuration de sass-loader
  const sassRule = config.module.rules.find((rule) => String(rule.test).includes('scss|sass'));
  if (sassRule) {
    const sassLoader = sassRule.use.find((use) => use.loader && use.loader.includes('sass-loader'));
    if (sassLoader) {
      sassLoader.options = {
        ...sassLoader.options,
        implementation: require('sass'),
        sassOptions: {
          ...sassLoader.options?.sassOptions,
          outputStyle: 'compressed'
        }
      };
    }
  }

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
