import {FETCH_HOLDERS_START,FETCH_HOLDERS_FAILED,FETCH_HOLDERS_SUCCESS} from '../constant/explorer-const';
const initialState = [
]
;

export default function explorerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOLDERS_START:
      return state;
  
  }

  return state;
}
