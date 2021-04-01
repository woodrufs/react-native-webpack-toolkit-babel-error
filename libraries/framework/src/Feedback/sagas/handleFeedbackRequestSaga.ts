import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";
import { AudioPlayer } from "../../Native/Audio/AudioPlayer";
import { FeedbackActions } from "../feedback-types";

/**
 * An object created for each notification type (error, success, warning) that has access to the functionality
 * for each of the three types of feedback (toast, audio, haptic).
 */
export interface IFeedbackRequestContext {
  audioPlayer: AudioPlayer;
  hapticFeedback: () => void;
}

/**
 *
 * @param context The feedback request context. This is passed into the saga by default when the action is performed.
 * @param action The specific action that triggered this saga. This consists of the payload and the action type.
 */
export function* handleFeedbackRequest(context: IFeedbackRequestContext, { payload }: FeedbackActions): SagaIterator {
  const { haptic, message, sound } = payload;
  const effects = [];

  if (message) {
  }

  if (haptic !== false) {
    effects.push(call(context.hapticFeedback));
  }

  if (sound !== false) {
    effects.push(call(context.audioPlayer.play));
  }

  yield all(effects);
}
