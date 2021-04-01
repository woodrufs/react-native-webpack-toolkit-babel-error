import { IAudioManagerConfig } from "../Native/Audio/audio-types";
import { ERROR_FEEDBACK, SUCCESS_FEEDBACK, WARNING_FEEDBACK } from "./feedback-actions";

/**
 * Contract required to initialize all dependencies for feedbackSaga.
 */
export interface IFeedbackSagaConfig {
  audioManagerConfig: IAudioManagerConfig;
}

/**
 * The request object for each feedback request that comes in. If a message is provided, it will be shown.
 * Haptic and audio feedback are enabled by default.
 */
export interface IFeedbackRequestParams {
  message?: string;
  haptic?: boolean;
  sound?: boolean;
}

/**
 * Contract for redux action when requesting error feedback be given to the user.
 */
export interface IErrorFeedbackAction {
  type: typeof ERROR_FEEDBACK;
  payload: IFeedbackRequestParams;
}

/**
 * Contract for redux action when requesting success feedback be given to the user.
 */
export interface ISuccessFeedbackAction {
  type: typeof SUCCESS_FEEDBACK;
  payload: IFeedbackRequestParams;
}

/**
 * Contract for redux action when requesting warning feedback be given to the user.
 */
export interface IWarningFeedbackAction {
  type: typeof WARNING_FEEDBACK;
  payload: IFeedbackRequestParams;
}

export type FeedbackActions = IErrorFeedbackAction | ISuccessFeedbackAction | IWarningFeedbackAction;
