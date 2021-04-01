# Plant Floor App

'Plant Floor' is the main application commonly known as 'Plex Mobile'. 'Plant Floor' is the only app now, but this allows us to spin up other apps that are PMC related but not related to plant floor specific tasks.
We provide three different versions of the app: Plant Floor, Plant Floor - Test, and Plant Floor - Development.

## Getting Started

### Requirements

TODO: STILL NEED TO ADD TO SERVER!

1) Make sure you've retrieved the necessary `.env.*` files from Plex's shared file server. There is one for both Development and Test: `.env.dev` and `.env.test`. These must be placed at the root of `apps/plant-floor`.

### Android

Gradle flavors are used to create different versions of our app (i.e. Production, Test, Development versions). By default, all native Android code goes in `./Android/app/src/main`. Any environment specific code that should overwrite what is in the `main` folder should be placed inside either the `production`, `staging`, or `development` folders at `./Android/app/src/`. For instance, each flavor overrides the default app icon as well as the default color scheme to give either a blue, green or orange tint.

Use `rushx android-prod`, `rushx android-test`, or `rushx android-ios` to build and launch a version of the app.

### iOS

iOS targets are used to create the different versions of our iOS app (i.e. Production, Test, Development versions).

Make sure that you have ran `pod install` inside the iOS folder. Afterwards, you can use `rushx ios-prod`, `rushx ios-test`, or `rushx ios-dev` to build and launch a version of the app.

## Troubleshooting

TODO: This should be able to be removed. I think I fixed it but leaving it here for now in case someone else does run into it.

### The app started, but it erred while connecting to the development server. This will usually mention 'metro server'

By default, react-native uses metro to run a local server to serve your JavaScript files. Metro has its pitfalls so we are using the haul bundler instead. Make sure that you have ran `rushx start` within the plant-floor folder and do not have any metro server running. We are looking into a solution to prevent this from happening in the future.

### My iOS build is failing and mentioning something about 'pods' or a 'podfile'

iOS uses cocoa pods to manage dependencies. When new dependencies are taken in, you need to run `pod install` inside plant-floor's iOS folder.

### My iOS build is not respecting environment variables

Make sure that you do not have a .env file at /tmp/envfile. Open Finder, `cmd + shift + G` (to open the 'Go to Folder' window), then enter `/tmp` to view this folder.
