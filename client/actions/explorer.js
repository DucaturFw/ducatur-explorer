import{FETCH_HOLDERS_START,FETCH_HOLDERS_SUCCESS,FETCH_HOLDERS_FAILED} from '../constant/explorer-const';
import Wallet from '../explorer/index';
import { error } from 'util';
import _ from 'lodash';
export function fetchHolders (){
    return(dispatch)=>{
        dispatch({type:FETCH_HOLDERS_START})

     Wallet.init().then(res=>{
         
         let resultTable =[
            {address:'0x0000000000000000000000000000000000000000',
            token:7000000000
           }  
         ];

         let resultDiagram=[];
         let values = res.map(item=>item.returnValues);
             values.forEach( function(item){ Math.round( item.value / 1000000000000000000)});
         console.log(values);
         values.forEach(function(item,index){
            resultTable.push({
               address:item.to,
               token: item.value 
           })
     let indexadr =   _.findIndex(resultTable,el=>el.address===item.from);
     resultTable[indexadr].token = (resultTable[indexadr].token - item.value)

        //    resultDiagram.push({
        //     title:item.to,
        //    value:10,
        //    color:getRandomRgb(),
        //    token: item.value 
        // })
          
        })


        // const sum = _.sum(resultTable.map(item=>item.token))
           
        // const tokens = resultTable.map((item)=>{
        //     return {
        //        address:item.address,
        //        token:item.token,
        //        percent: (item.token /sum *100).toFixed(2)
        //     }
        // })
        // const diagram = resultDiagram.map((item)=>{
        //     return{
        //     title:item.title,
        //    value:Number((item.token /sum *100).toFixed(2)),
        //    color:item.color,

        //     }
        // })



         console.log(resultTable);
//dispatch({type:FETCH_HOLDERS_SUCCESS,payload:tokens,diagram:diagram})
          
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