const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "versent",
    projectName: "utility-module",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      "@pkg/root-config": "@pkg/root-config"
    }
  });
};
