import { combineReducers, createStore } from 'redux';
import { SettingsFormReducer } from './SettingsFormStore/settingsFormReducer'

const rootReducer = combineReducers({
  SettingsForm: SettingsFormReducer,
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;