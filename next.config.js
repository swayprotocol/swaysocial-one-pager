module.exports = {
  // basePath: '/swaysocial',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: [{
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [{
              name: 'removeViewBox',
              active: false,
            }]
          }
        }
      }],
    });
    return config;
  },
};
