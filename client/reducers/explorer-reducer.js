import {FETCH_HOLDERS_START,FETCH_HOLDERS_FAILED,FETCH_HOLDERS_SUCCESS} from '../constant/explorer-const';
const initialState = {
  tokens:[],
  diagram:[],
  preloader:false
}
;

export default function explorerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOLDERS_START:
      return {...state,preloader:true};
      case FETCH_HOLDERS_SUCCESS:
      return {...state,preloader:false,tokens:action.payload,diagram:action.diagram};
      case FETCH_HOLDERS_FAILED:
      return {...state,preloader:false};

  
  }

  return state;
}
