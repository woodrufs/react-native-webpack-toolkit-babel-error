# Feedback

## Description

The Feedback API provides an easy way for a developer to provide feedback to an end user for a specific event performed. This allows a developer to display a toast message, play an audible tone, and provide haptic feedback for any error, success, or warning all in one call.

As mentioned above, we have three different types of notifications we want to show to an end user:

1) Error
2) Success
3) Warning

There are also three different types of feedback supported. By default, all three feedback types are executed, but they can be turned off individually.

1) Toast message - A green, red, or orange toast message is displayed to a user with the message.
2) Audible tone - Each notification type has a unique tone that is played when one is triggered.
3) Haptic touch - iOS devices have support for haptic feedback. Each notification type has a unique pattern.

## How to Use in Applet

`feedback-actionCreators.ts` contains methods to create the redux actions required to trigger feedback for a error, success or warning event. A developer should invoke one of the follow redux action creators to give the user feedback: `errorFeedback`, `successFeedback`, or `warningFeedback`.
All three methods take in an `IFeedbackRequestParams` that allow a user to specify the message a user sees as well as disable audio or haptic feedback.

### `IFeedbackRequestParams`

The request object provided with each user feedback request.

| Name | Type | Use |Required |
| ---- | ---- | ---- | ----- |
| message | string| The message to show the user. | No |
|haptic|boolean|Enabled by default. Disabling will prevent vibration from occuring. | No|
|sound|boolean|Enabled by default. Disabling will prevent vibration from occuring. | No|

---
&nbsp;

### `errorFeedback`

Creates the redux action for error feedback.
| Type | Required |
| ---- | ---- |
| `(request: IFeedbackRequestParams) => IErrorFeedbackAction` | No |

---
&nbsp;

### `successFeedback`

Creates the redux action for success feedback.
| Type | Required |
| ---- | ---- |
| `(request: IFeedbackRequestParams) => ISuccessFeedbackAction` | No |

---
&nbsp;

### `warningFeedback`

Creates the redux action for warning feedback.
| Type | Required |
| ---- | ---- |
| `(request: IFeedbackRequestParams) => IWarningFeedbackAction` | No |

---
&nbsp;

### @react-native-community/audio-toolkit

We use [`@react-native-commiunity/audio-toolkit`](https://github.com/react-native-audio-toolkit/react-native-audio-toolkit) to produce audible noises. This library requires additional configuration that must completed inside the mobile app's `iOS` and `android` folders. These steps can be found on their github page, [here](https://github.com/react-native-audio-toolkit/react-native-audio-toolkit/blob/master/docs/SETUP.md). More information on our implementation of audio support can be found in the Audio module's README.md.
