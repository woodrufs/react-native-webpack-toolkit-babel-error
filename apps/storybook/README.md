# Stormbreaker Storybook 📚

Welcome to our storybook app for our react-native components.

## Getting started

We have 2 instances of Storybook that can be used. To get started:

```bash
rush install
rush build
```

### Storybook Native

We have both iOS and android apps that can be used to view stories.

```bash
# start-up the bundler
rushx start

rushx android
# or
rushx ios
```

Optionally you can start Storybook locally to navigate through stories on your device:

```bash
# launch on http://localhost:7007
rushx storybook-native
```

### Storybook Web

We are also using `react-native-web` to convert our components and display as web components. 😎

```bash
rushx storybook-web
```