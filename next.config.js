module.exports = {
    webpack(config, { dev, isServer }) {
      if (dev && !isServer) {
        config.devtool = false; // Disable source maps in development for client-side
      }
      return config;
    },
  };