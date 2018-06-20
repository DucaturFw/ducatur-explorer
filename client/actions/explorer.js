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
         let values = res.map(item=>item.returnValues).slice(1);
         console.log(values);
         
         values.forEach(function(item,index){
            resultTable.push({
               address:item.to,
               token:( Math.round( item.value / 1000000000000000000))
           })
           resultDiagram.push({
            title:item.to,
           value:10,
           color:getRandomRgb(),
           token:( Math.round( item.value / 1000000000000000000))
        })
          
        })


        const sum = _.sum(resultTable.map(item=>item.token))
           
        const tokens = resultTable.map((item)=>{
            return {
               address:item.address,
               token:item.token,
               percent: (item.token /sum *100).toFixed(2)
            }
        })
        const diagram = resultDiagram.map((item)=>{
            return{
            title:item.title,
           value:Number((item.token /sum *100).toFixed(2)),
           color:item.color,

            }
        })



         console.log(tokens);
dispatch({type:FETCH_HOLDERS_SUCCESS,payload:tokens,diagram:diagram})
          
}).catch(error=>{ 
                   console.log(error);
              dispatch({type:FETCH_HOLDERS_FAILED})
          });
          
      
  
    }
}
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}