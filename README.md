# Test Repo

This repo has been created to reproduce an issue while migrating to react-native-webpacl-toolkit from haul. Following the steps below on Mac OS should help reproduce the issue. We want to run the `rushx` commands below inside `~/apps/plant-floor`.

```bash
npm install -g pnpm
pnpm add @microsoft/rush --global
rush install
rush build
cd apps/plant-floor/ios
pod install
rushx start
rushx ios-test
```

> Make sure you get `rush` and `pnpm` added to your path.
