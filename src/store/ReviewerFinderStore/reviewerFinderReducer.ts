import {
  ReviewerFinderActionTypes,
  SetIsLoadingActionType,
  SetReviewerActionType,
  SetSettingsActionType,
} from './reviewerFinderActionTypes'

const initialState = {
  login: '',
  repo: '',
  blacklist: '',
  contributors: [],
  reviewer: null,
  isLoading: false,
}

type Actions =
  | SetSettingsActionType
  | SetIsLoadingActionType
  | SetReviewerActionType

export function ReviewerFinderReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ReviewerFinderActionTypes.SET_LOGIN:
      return { ...state, login: action.payload }
    case ReviewerFinderActionTypes.SET_REPO:
      return { ...state, repo: action.payload }
    case ReviewerFinderActionTypes.SET_BLACKLIST:
      return { ...state, blacklist: action.payload }
    case ReviewerFinderActionTypes.SET_REVIEWER:
      return {
        ...state,
        reviewer: {
          avatarUrl: action.payload.avatar_url,
          htmlUrl: action.payload.html_url,
          login: action.payload.login,
        },
      }
    case ReviewerFinderActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
