import Web3 from 'web3';
const abi = require('./abi.json');
const contractAddress = '0x506081CF642E89958A842108C74BC1045332186B';


let localWeb3,
  contractInstance;


export default {
  init: function () {
    localWeb3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io'));
      contractInstance = new localWeb3.eth.Contract(abi, contractAddress);
     return contractInstance.getPastEvents('Transfer', {
        fromBlock: 0,
        toBlock: 'latest'
      }, function(error, events){
      //  let result = events.map(item=>item.returnValues);

      //  return result;
        
    });
  }
}