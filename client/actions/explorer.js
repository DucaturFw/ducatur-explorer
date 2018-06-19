import{FETCH_HOLDERS_START,FETCH_HOLDERS_SUCCESS,FETCH_HOLDERS_FAILED} from '../constant/explorer-const';
import Wallet from '../explorer/index';
import { error } from 'util';
import _ from 'lodash';
export function fetchHolders (){
    return(dispatch)=>{
        dispatch({type:FETCH_HOLDERS_START})

     Wallet.init().then(res=>{
         
         let resultTable =[];
         let resultDiagram=[];
         let values = res.map(item=>item.returnValues);
         console.log(values);
         values.forEach(function(item,index){
            resultTable.push({
               address:item.to,
               token:( item.value / 1000000000000000000)
           })
           resultDiagram.push({
            title:item.to,
           value:10
        })
          
        })
         console.log(resultTable);
dispatch({type:FETCH_HOLDERS_SUCCESS,payload:resultTable,diagram:resultDiagram})
          
}).catch(error=>{ 
                   console.log(error);
              dispatch({type:FETCH_HOLDERS_FAILED})
          });
          
      
  
    }
}