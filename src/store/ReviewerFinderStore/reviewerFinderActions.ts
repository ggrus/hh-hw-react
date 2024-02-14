import { ContributorDataFromAPI } from '../../shared/interfaces/interfaces'
import { ReviewerFinderActionTypes } from './reviewerFinderActionTypes'

export const setLogin = (user: string) => ({
  type: ReviewerFinderActionTypes.SET_LOGIN,
  payload: user,
})

export const setRepo = (repo: string) => ({
  type: ReviewerFinderActionTypes.SET_REPO,
  payload: repo,
})

export const setBlacklist = (blacklist: string) => ({
  type: ReviewerFinderActionTypes.SET_BLACKLIST,
  payload: blacklist,
})

export const setReviewer = (reviewer: ContributorDataFromAPI) => ({
  type: ReviewerFinderActionTypes.SET_REVIEWER,
  payload: reviewer,
})

export const setIsLoading = (isLoading: boolean) => ({
  type: ReviewerFinderActionTypes.SET_IS_LOADING,
  payload: isLoading,
})
