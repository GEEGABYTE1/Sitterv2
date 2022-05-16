const Web3 = require('web3')
var web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');



async function accounts () {
    try {
        const accounts_lst = await web3.eth.getAccounts()
        return accounts_lst
    } catch (err) {
        console.log(err)
    }
}


async function running () {
    let lst_of_accounts = await accounts()
    let supply_account = lst_of_accounts[0]
    console.log(supply_account)

}


running()