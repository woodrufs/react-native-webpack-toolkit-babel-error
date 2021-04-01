import { testSaga } from "redux-saga-test-plan";
import { takeEvery } from "redux-saga/effects";

import { feedbackSaga } from "./feedback-saga";
import { ERROR_FEEDBACK, SUCCESS_FEEDBACK, WARNING_FEEDBACK } from "./feedback-actions";
import { handleFeedbackRequest } from "./sagas";
import { AudioPlayer } from "../Native/Audio/AudioPlayer";
import { createAudioManager } from "../Native/Audio/helpers/createAudioManager";
import { Haptic } from "../Native";
import { IFeedbackSagaConfig } from "./feedback-types";

describe("feedback-saga", () => {
  let context: IFeedbackSagaConfig;
  beforeEach(() => {
    context = {
      audioManagerConfig: {
        audioCatalog: {
          error: "bad.wav",
          success: "good.wav",
          warning: "meh.wav"
        }
      }
    };
  });

  it("creates the AudioManager and initiates watcher sagas correctly.", () => {
    const mockedAudioManager = {
      errorPlayer: new AudioPlayer("test"),
      successPlayer: new AudioPlayer("test"),
      warningPlayer: new AudioPlayer("test")
    };
    const watchingSagas = [
      takeEvery(ERROR_FEEDBACK, handleFeedbackRequest, {
        audioPlayer: mockedAudioManager.errorPlayer,
        hapticFeedback: Haptic.notificationError
      }),
      takeEvery(SUCCESS_FEEDBACK, handleFeedbackRequest, {
        audioPlayer: mockedAudioManager.successPlayer,
        hapticFeedback: Haptic.notificationSuccess
      }),
      takeEvery(WARNING_FEEDBACK, handleFeedbackRequest, {
        audioPlayer: mockedAudioManager.warningPlayer,
        hapticFeedback: Haptic.notificationWarning
      })
    ];
    testSaga(feedbackSaga, context)
      .next()
      .call(createAudioManager, context.audioManagerConfig)
      .next(mockedAudioManager)
      .all(watchingSagas)
      .next()
      .isDone();
  });
});
