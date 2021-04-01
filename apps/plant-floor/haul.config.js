import { withPolyfills, makeConfig } from "@haul-bundler/preset-0.60";

// eslint-disable-next-line import/no-default-export
export default makeConfig({
  bundles: {
    index: {
      entry: withPolyfills("./index"),
    },
  },
});
