import { combineReducers, createStore } from 'redux';
import { ReviewerFinderReducer } from './ReviewerFinderStore/reviewerFinderReducer'

const rootReducer = combineReducers({
  ReviewerFinder: ReviewerFinderReducer,
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;