import { testSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { handleFeedbackRequest, IFeedbackRequestContext } from "./handleFeedbackRequestSaga";

describe("handleFeedbackRequestSaga", () => {
  let context: IFeedbackRequestContext;
  beforeEach(() => {
    context = {
      audioPlayer: {
        play: () => {},
        filename: "Any",
        player: {} as any,
        preparePlayer: () => Promise.resolve()
      },
      hapticFeedback: () => {}
    };
  });

  it("triggers only audio feedback when requested", () => {
    testSaga(handleFeedbackRequest, context, {
      payload: { sound: true, haptic: false },
      type: "ERROR_FEEDBACK@Feedback.Framework"
    })
      .next()
      .all([call(context.audioPlayer.play)])
      .next()
      .isDone();
  });

  it("triggers only haptic feedback when requested", () => {
    testSaga(handleFeedbackRequest, context, {
      payload: { haptic: true, sound: false },
      type: "ERROR_FEEDBACK@Feedback.Framework"
    })
      .next()
      .all([call(context.hapticFeedback)])
      .next()
      .isDone();
  });

  it("triggers audio and haptic feedback when requested", () => {
    testSaga(handleFeedbackRequest, context, {
      payload: { sound: true, haptic: true },
      type: "ERROR_FEEDBACK@Feedback.Framework"
    })
      .next()
      .all([call(context.hapticFeedback), call(context.audioPlayer.play)])
      .next()
      .isDone();
  });

  it("does not trigger any form of feedback if all forms of feedback are disabled", () => {
    expect(() => {
      testSaga(handleFeedbackRequest, context, {
        payload: { sound: false, haptic: false },
        type: "ERROR_FEEDBACK@Feedback.Framework"
      })
        .next()
        .all([])
        .next()
        .isDone();
    });
  });

  it("triggers audio and haptic feedback by default when not disabled in request", () => {
    expect(() => {
      testSaga(handleFeedbackRequest, context, {
        payload: {},
        type: "ERROR_FEEDBACK@Feedback.Framework"
      })
        .next()
        .all([call(context.hapticFeedback), call(context.audioPlayer.play)])
        .next()
        .isDone();
    });
  });
});
