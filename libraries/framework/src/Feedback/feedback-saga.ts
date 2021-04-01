import { SUCCESS_FEEDBACK, ERROR_FEEDBACK, WARNING_FEEDBACK } from "./feedback-actions";
import { all, call, takeEvery } from "redux-saga/effects";
import { handleFeedbackRequest, IFeedbackRequestContext } from "./sagas";
import { SagaIterator } from "redux-saga";
import { AudioManager } from "../Native/Audio";
import { createAudioManager } from "../Native/Audio/helpers/createAudioManager";
import { Haptic } from "../Native/Haptic";
import { IFeedbackSagaConfig } from "./feedback-types";

export function* feedbackSaga(config: IFeedbackSagaConfig): SagaIterator {
  const audioManager: AudioManager = yield call(createAudioManager, config.audioManagerConfig);
  const errorContext: IFeedbackRequestContext = {
    audioPlayer: audioManager.errorPlayer,
    hapticFeedback: Haptic.notificationError
  };
  const successContext: IFeedbackRequestContext = {
    audioPlayer: audioManager.successPlayer,
    hapticFeedback: Haptic.notificationSuccess
  };
  const warningContext: IFeedbackRequestContext = {
    audioPlayer: audioManager.warningPlayer,
    hapticFeedback: Haptic.notificationWarning
  };

  yield all([
    takeEvery(ERROR_FEEDBACK, handleFeedbackRequest, errorContext),
    takeEvery(SUCCESS_FEEDBACK, handleFeedbackRequest, successContext),
    takeEvery(WARNING_FEEDBACK, handleFeedbackRequest, warningContext)
  ]);
}
