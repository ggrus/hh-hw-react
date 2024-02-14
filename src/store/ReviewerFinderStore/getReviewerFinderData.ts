import { RootState } from '../store'

export const getLogin = (state: RootState) =>
  state.ReviewerFinder.login

export const getRepo = (state: RootState) =>
  state.ReviewerFinder.repo

export const getBlacklist = (state: RootState) =>
  state.ReviewerFinder.blacklist

export const getReviewer = (state: RootState) =>
  state.ReviewerFinder.reviewer

export const getIsLoading = (state: RootState) =>
  state.ReviewerFinder.isLoading