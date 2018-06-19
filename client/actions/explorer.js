import{FETCH_HOLDERS_START,FETCH_HOLDERS_SUCCESS,FETCH_HOLDERS_FAILED} from '../constant/explorer-const';
import Wallet from '../explorer/index';
export function fetchHolders (){
    return(dispatch)=>{
        console.log("fgdgdg");
  Wallet.init();
        dispatch({type:FETCH_HOLDERS_START})
    }
}