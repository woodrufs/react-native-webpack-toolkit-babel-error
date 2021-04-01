# Haptic

## Description

Haptic feedback is felt by a user using vibration. iOS and Android each have their own implementation.

## Methods

### `impactHeavy`

Produces the most prominent vibration of impact patterns.

| Type | Required |
| ---- | ---- |
| `() => void` | No |

---
&nbsp;

### `impactLight`

Produces the least prominent vibration of impact patterns.

| Type | Required |
| ---- | ---- |
| `() => void` | No |

---
&nbsp;

### `impactMedium`

Produces a vibration in the middle of the two other impact patterns.

| Type | Required |
| ---- | ---- |
| `() => void` | No |

---
&nbsp;

### `notificationError`

Produces a vibration pattern used to signify an error has occurred.

| Type | Required |
| ---- | ---- |
| `() => void` | No |

---
&nbsp;

### `notificationSuccess`

Produces a vibration pattern used to signify an action has resulted in success.

| Type | Required |
| ---- | ---- |
| `() => void` | No |

---
&nbsp;

### `notificationWarning`

Produces a vibration pattern used to signify a warning has occurred.

| Type | Required |
| ---- | ---- |
| `() => void` | No |

---
&nbsp;

## External Libraries

### react-native-haptic-feedback

iOS uses the library [react-native-haptic-feedback](https://github.com/junina-de/react-native-haptic-feedback) for haptic feedback. Ideally, Android would use this too, but not all Android devices are working for this library currently. Instead Android uses react-native's native `Vibration` module to create its own vibration patterns.
