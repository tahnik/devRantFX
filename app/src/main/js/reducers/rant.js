import { FETCH_RANT, CLOSE_RANT } from '../consts/rants';
import STATE from '../consts/state';

const DEFAULT_STATE = {
  rant: null,
  state: STATE.SUCCESS,
};


export default function rant(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_RANT:
      switch (action.state) {
        case STATE.LOADING: {
          return {
            ...state,
            state: action.state,
            rant: null,
          };
        }
        case STATE.SUCCESS: {
          return {
            ...state,
            state: action.state,
            rant: action.payload,
          };
        }
        case STATE.FAILED: {
          return { ...state, state: action.state, rant: null };
        }
        default: {
          return { ...state, state: action.state, rant: null };
        }
      }
    case CLOSE_RANT: {
      return { rant: null, state: STATE.SUCCESS, commentPost: '' };
    }
    default: {
      return state;
    }
  }
}
