# Audio

## Description

The Audio native module is used to provide the user with an audible feedback on their interactions. This is used by the Feedback module to produce audible beeps to response to a user's interaction. The beeps are different based on whether the user had an event that resulted in success, error, or a warning.

The module consists of two main classes: the AudioManager and the AudioPlayer. The player is responsible for loading an audio file and playing it when requested. The manager is used to maintain three audio players each loaded with a different sounds for the following events: error, success and warning.

## AudioPlayer

The audio player is responsible for loading an indvidual audio file and playing this file when requsted.

### `preparePlayer`

Prepares the audio player ahead of time for playback by loading the source file.

|   Type  | Required |
| ------  | -------  |
| `() => Promise<void>`|  No |

---
&nbsp;

### `play`

Plays the audio file. Accepts a callback that will be called when the file has begun playing.

| Type | Required |
| ---- | ---- |
| `(onPlayStarted: () => void ) => void` | No |

---
&nbsp;

## AudioManager

The audio manager houses the three audio players used to generate the different sounds used within our app.
It is recommended that the helper function `createAudioManager` is used to create an `AudioManager`.

### `playErrorSound`

Plays the error sound.

| Type | Required |
| ---- | ---- |
| `(onPlayStarted?: () => void) => void` | No |

---
&nbsp;

### `playSuccessSound`

Plays the success sound.

| Type | Required |
| ---- | ---- |
| `(onPlayStarted?: () => void) => void` | No |

---
&nbsp;

### `playWarningSound`

Plays the warning sound.

| Type | Required |
| ---- | ---- |
| `(onPlayStarted?: () => void) => void` | No |

---
&nbsp;

## Additional Library Information

### Requirements

The audio files being used must be placed in specific locations. Please reference the section below about `@react-native-community/audio-toolkit` for more information.

### @react-native-community/audio-toolkit

We use [`@react-native-commiunity/audio-toolkit`](https://github.com/react-native-audio-toolkit/react-native-audio-toolkit) to produce audio. This library requires additional configuration that must completed inside the mobile app's `iOS` and `android` folders. These steps can be found on their github page, [here](https://github.com/react-native-audio-toolkit/react-native-audio-toolkit/blob/master/docs/SETUP.md).
