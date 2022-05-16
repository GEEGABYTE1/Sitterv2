const Web3 = require('web3')
var web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');

web3.eth.getAccounts(console.log);
// console.log(web3.eth.accounts)