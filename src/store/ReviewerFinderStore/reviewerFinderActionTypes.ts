import { ContributorDataFromAPI } from "../../shared/interfaces/interfaces"

export enum ReviewerFinderActionTypes {
  SET_LOGIN = 'SET_LOGIN',
  SET_REPO = 'SET_REPO',
  SET_BLACKLIST = 'SET_BLACKLIST',
  SET_REVIEWER = 'SET_REVIEWER',
  SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetSettingsActionType {
  type:
    | ReviewerFinderActionTypes.SET_LOGIN
    | ReviewerFinderActionTypes.SET_REPO
    | ReviewerFinderActionTypes.SET_BLACKLIST
  payload: string,
}

export interface SetIsLoadingActionType {
  type: ReviewerFinderActionTypes.SET_IS_LOADING,
  payload: boolean,
}

export interface SetReviewerActionType {
  type: ReviewerFinderActionTypes.SET_REVIEWER,
  payload: ContributorDataFromAPI
}
