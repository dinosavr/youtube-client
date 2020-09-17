import { createAction, props, ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { ICustomVideo } from '../../redux/state.models';

export const addVideo:
  ActionCreator<'[Admin Component] AddVideo',
    (props: {
      payload: ICustomVideo;
    }) => { payload: ICustomVideo; } & TypedAction<string>>
  = createAction('[Admin Component] AddVideo', props<{ payload: ICustomVideo }>());

export const removeLastVideo: ActionCreator<string, () => TypedAction<string>>
  = createAction('[Admin Component] RemoveLastVideo');
export const resetAllCustomVideos: ActionCreator<string, () => TypedAction<string>>
  = createAction('[Admin Component] ResetAllCustomVideos');
