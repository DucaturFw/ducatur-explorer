import { FETCH_HOLDERS_START, FETCH_HOLDERS_SUCCESS, FETCH_HOLDERS_FAILED } from '../constant/explorer-const';
import Wallet from '../explorer/index';
import { error } from 'util';
import _ from 'lodash';
export function fetchHolders() {
    return (dispatch) => {
        dispatch({ type: FETCH_HOLDERS_START })

        let resultTable =
            { '0x0000000000000000000000000000000000000000': 7000000000 };
        let resultTokens = [];
        let resultDiagram = [];
        let allSumTokens = 0;
        function addBalance(addr, amount) {
            (!resultTable[addr]) ? resultTable[addr] = amount : resultTable[addr] += amount

        }

        function reduceBalance(addr, amount) {
            (!resultTable[addr]) ? resultTable[addr] = 0 : resultTable[addr] -= amount
        }
        Wallet.init().then(res => {



            let values = res.map(item => item.returnValues);
            values.forEach((item) => { item.value = Math.round(Number(item.value) / 1000000000000000000) });
            values.forEach((item, index) => {
                addBalance(item.to, item.value);
                reduceBalance(item.from, item.value);

            }
            )

            //allsumtoken
            resultTable['0x0000000000000000000000000000000000000000'] = 0;
            for (let item in resultTable) {
                allSumTokens += resultTable[item]
            }

            for (let item in resultTable) {
                resultTokens.push({
                    address: item,
                    token: resultTable[item],
                    percent: (resultTable[item] / allSumTokens * 100).toFixed(4)
                })
                resultDiagram.push({
                    title: item,
                    value: Number((resultTable[item] / allSumTokens * 100).toFixed(4)),
                    color: getRandomRgb()
                })
            }
                 let resultHolders = resultTokens.filter(item=>item.token>0)

            dispatch({ type: FETCH_HOLDERS_SUCCESS, payload: resultHolders, diagram: resultDiagram })

        }).catch(error => {
            dispatch({ type: FETCH_HOLDERS_FAILED })
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
