import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { addVideo, removeLastVideo, resetAllCustomVideos } from '../actions/admin.actions';
import { IAppState } from '../state.models';

export const initialState: IAppState = {
  customVideos: [],
  videos: [],
};

const _adminReducer: ActionReducer<IAppState, Action> = createReducer(
  initialState,
  // on(addVideo, (state) => state),
  on(addVideo, (state, action) => ({ ...state, customVideos: [...state.customVideos, action.payload]})),
  on(removeLastVideo, (state) => state),
  on(resetAllCustomVideos, (state) => state)
);

export function adminReducer(state: IAppState, action: Action): IAppState {
  return _adminReducer(state, action);
}
