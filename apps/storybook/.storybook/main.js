const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve.alias,
          "react-native$": path.join(__dirname, "../node_modules/react-native-web"),
          "@storybook/react-native": "@storybook/react"
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules\/(?!()\/).*/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["module:metro-react-native-babel-preset'"]
              }
            }
          }
        ]
      }
    };
  }
};
