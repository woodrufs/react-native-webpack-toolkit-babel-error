import { ERROR_FEEDBACK, SUCCESS_FEEDBACK, WARNING_FEEDBACK } from "./feedback-actions";
import { FeedbackActions, IFeedbackRequestParams } from "./feedback-types";

export function errorFeedback(request: IFeedbackRequestParams): FeedbackActions {
  return { payload: request, type: ERROR_FEEDBACK };
}

export function successFeedback(request: IFeedbackRequestParams): FeedbackActions {
  return { payload: request, type: SUCCESS_FEEDBACK };
}

export function warningFeedback(request: IFeedbackRequestParams): FeedbackActions {
  return { payload: request, type: WARNING_FEEDBACK };
}
